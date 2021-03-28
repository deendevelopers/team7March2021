import { apiFetch, MESSAGE_ENDPOINT, POST } from "."

type Message = SmsMessage | EmailMessage

type SmsMessage = { mobile: number; message: string };
type EmailMessage = { email: string; title: string; message: string }

const isMobile = (obj: Record<string, any>): obj is SmsMessage => 'mobile' in obj;

export const sendMessage = async (messageRequest: Message): Promise<void> => {
  if (isMobile(messageRequest)) sendSmsMessage(messageRequest)
  else sendEmailMessage(messageRequest)
}

const sendSmsMessage = async (sms: SmsMessage): Promise<boolean> => {
  return await apiFetch(`${MESSAGE_ENDPOINT}/sms`, {
    body: JSON.stringify({ message: { mobile: sms.mobile, message: sms.message } }),
    method: POST
  }).then(res => res.ok)
}

const sendEmailMessage = async ({ email, title, message }: EmailMessage): Promise<boolean> => {
  return await apiFetch(`${MESSAGE_ENDPOINT}/email`, {
    body: JSON.stringify({ message: { email, title, message } }),
    method: POST
  }).then(res => res.ok)
}