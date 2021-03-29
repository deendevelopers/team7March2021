import { apiFetch, MESSAGE_ENDPOINT, POST } from "."

type Message = SmsMessage | EmailMessage

type SmsMessage = { mobile: string; message: string };
type EmailMessage = { email: string; title: string; message: string }

const isMobile = (obj: Record<string, any>): obj is SmsMessage => 'mobile' in obj;

export const sendMessage = async (messageRequest: Message): Promise<void> => {
  if (isMobile(messageRequest)) sendSmsMessage(messageRequest)
  else sendEmailMessage(messageRequest)
}

const sendSmsMessage = async (sms: SmsMessage): Promise<boolean> => {
  return await apiFetch(`/post${MESSAGE_ENDPOINT}`, {
    body: JSON.stringify({ message: { number: sms.mobile, message: sms.message } }),
    method: POST
  }).then(res => res.ok)
}

const sendEmailMessage = async ({ email, title, message }: EmailMessage): Promise<boolean> => {
  return await apiFetch(`/post${MESSAGE_ENDPOINT}/email`, {
    body: JSON.stringify({ message: { email, title, message } }),
    method: POST
  }).then(res => res.ok)
}