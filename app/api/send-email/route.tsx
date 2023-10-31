import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Need to set up a domain to get this to work

// export async function POST() {
//   await resend.emails.send({
//     from: '...domain if set up in resend',
//     to: 'char502@hotmail.com',
//     subject: '',
//     react: <WelcomeTemplate name="char" />
//   });

//   return NextResponse.json({});
// }
