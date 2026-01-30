export const AdminNotificationTemplate = (name: string, email: string, subject: string, message: string) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Submission</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa; color: #1a202c; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 16px; overflow: hidden; shadow: 0 4px 6px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; }
        .header { background: #3b82f6; padding: 30px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; }
        .content { padding: 40px; }
        .field { margin-bottom: 24px; }
        .label { font-size: 12px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .value { font-size: 16px; font-weight: 600; color: #1e293b; }
        .message-box { background: #f8fafc; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-top: 10px; font-style: italic; line-height: 1.6; }
        .footer { background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0; }
        .footer p { font-size: 12px; color: #94a3b8; margin: 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Connection</h1>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">From</div>
                <div class="value">${name}</div>
            </div>
            <div class="field">
                <div class="label">Email</div>
                <div class="value">${email}</div>
            </div>
            <div class="field">
                <div class="label">Subject</div>
                <div class="value">${subject}</div>
            </div>
            <div class="field">
                <div class="label">Message</div>
                <div class="message-box">
                    ${message.replace(/\n/g, '<br>')}
                </div>
            </div>
        </div>
        <div class="footer">
            <p>This email was sent from your portfolio contact form.</p>
        </div>
    </div>
</body>
</html>
`;

export const UserConfirmationTemplate = (name: string) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Reaching Out</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa; color: #1a202c; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 16px; overflow: hidden; shadow: 0 4px 6px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; }
        .header { background: #3b82f6; padding: 30px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; }
        .content { padding: 40px; text-align: center; }
        .content h2 { color: #1e293b; margin-top: 0; }
        .content p { color: #64748b; line-height: 1.6; font-size: 16px; }
        .button { display: inline-block; padding: 14px 28px; background: #3b82f6; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 700; margin-top: 20px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px; }
        .footer { background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0; }
        .footer p { font-size: 12px; color: #94a3b8; margin: 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Message Received</h1>
        </div>
        <div class="content">
            <h2>Hi ${name},</h2>
            <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
            <p>In the meantime, feel free to check out my latest projects on GitHub or follow me on social media.</p>
            <a href="https://github.com/awashdev" class="button">Visit My GitHub</a>
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} AwashDev. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;
