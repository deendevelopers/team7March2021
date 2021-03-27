import twilio from 'twilio';
import type { NextApiRequest, NextApiResponse } from 'next'
// import sendgrid, { MailDataRequired } from '@sendgrid/mail';
// import { sendgridApikey } from '../config';

const accountSid = "ACbb1b8ecea8fea0ffb17b10cdc7a29848";
const authToken = "30cb7114e0bedec5e685aef5d0159a43"
const client = twilio(accountSid, authToken);
const FROM_PHONE_NUMBER = '+447481346557'

export type SendMessageRequest = {
  username: string;
  message: string;
  postTitle: string;
  email?: string;
  number?: string;
}

function buildSms({ username, postTitle, message }: SendMessageRequest) {
  return `${username} has responded to your post: ${postTitle}\n${message}`
}

function containsNumber(messageRequest: SendMessageRequest): boolean {
  return messageRequest['number'] !== undefined || messageRequest['number'] !== null;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      const messageRequest: SendMessageRequest = req.body.message;
      if (messageRequest === undefined) return res.status(422).json({ message: "Missing message"})
      if (containsNumber(messageRequest)) {
        return await client.messages.create({ body: buildSms(messageRequest), from: FROM_PHONE_NUMBER, to: messageRequest.number })
          .then(message => console.log(message.sid))
          .then(() => res.status(200).send);
      } else {
        return res.status(400).json({
          message: "No number provided"
        })
      }
      break;
    default:
      return res.status(405).json({
        message: `Method ${req.method} not available on this URL`
      })
  }
}

// const accountSid = process.env.TWILIO_ACCOUNT_SID || "ACbb1b8ecea8fea0ffb17b10cdc7a29848";
// const authToken = process.env.TWILIO_AUTH_TOKEN || "30cb7114e0bedec5e685aef5d015z9a43"

// sendgrid.setApiKey(sendgridApikey);

// const FROM = 'info@coronaunity.org';
// const PAF_FROM = 'phoneafriend@coronaunity.org';

// const EmailTemplates = {
//   VolunteerWelcome: { templateId: 'd-2f43db0222fa454bb0c85465c9255bb7', replyTo: FROM, from: FROM },
// } as const;

// type EmailTemplateArgs = {
//   VolunteerWelcome: { name: string; phoneNumber: string };
// };

// export async function sendEmail<K extends keyof EmailTemplateArgs>(
//   template: K,
//   to: string,
//   args: EmailTemplateArgs[K],
// ) {
//   const emailOptions = EmailTemplates[template];
//   const message: MailDataRequired = {
//     to,
//     ...emailOptions,
//     dynamicTemplateData: {
//       ...args,
//     },
//     mailSettings: {
//       sandboxMode: {
//         enable: process.env.NODE_ENV === 'test',
//       },
//     },
//   };
//   return sendgrid.send(message);
// }