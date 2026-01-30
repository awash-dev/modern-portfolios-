import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { AdminNotificationTemplate, UserConfirmationTemplate } from '@/lib/email-templates';

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // 1. Send notification to Admin (You)
        const adminMailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER,
            replyTo: email,
            subject: `New Contact Form: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: AdminNotificationTemplate(name, email, subject, message),
        };

        // 2. Send confirmation to User (The sender)
        const userMailOptions = {
            from: `"AwashDev" <${process.env.SMTP_USER}>`,
            to: email,
            subject: `Thank you for contacting me, ${name}!`,
            text: `Hi ${name}, thank you for reaching out. I've received your message regarding "${subject}" and will get back to you soon.`,
            html: UserConfirmationTemplate(name),
        };

        // Execute both mail sends with detailed logging
        try {
            await Promise.all([
                transporter.sendMail(adminMailOptions),
                transporter.sendMail(userMailOptions),
            ]);
            console.log('Both emails sent successfully');
            return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
        } catch (mailError: unknown) {
            const error = mailError as { message?: string; code?: string; command?: string; response?: string };
            console.error('Nodemailer Error:', {
                message: error.message,
                code: error.code,
                command: error.command,
                response: error.response
            });
            return NextResponse.json({
                error: 'Failed to send email',
                details: error.message || 'Unknown SMTP error'
            }, { status: 500 });
        }
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('Request Error:', errorMessage);
        return NextResponse.json({ error: 'Failed to process request', details: errorMessage }, { status: 500 });
    }
}
