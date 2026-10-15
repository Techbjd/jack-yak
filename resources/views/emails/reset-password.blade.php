<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Reset your JackYak password</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: Arial, Helvetica, sans-serif;">
    <div style="max-width: 560px; margin: 0 auto; padding: 32px 16px;">
        {{-- Header --}}
        <div style="background-color: #0e1b2b; border-radius: 12px 12px 0 0; padding: 28px 32px; text-align: center;">
            <p style="margin: 0; color: #ffffff; font-size: 22px; font-weight: bold; letter-spacing: 0.5px;">JackYak</p>
            <p style="margin: 8px 0 0; color: rgba(255,255,255,0.65); font-size: 12px;">ACCOUNT RECOVERY</p>
        </div>

        {{-- Body --}}
        <div style="background-color: #ffffff; border-radius: 0 0 12px 12px; padding: 32px;">
            <p style="margin: 0 0 8px; color: #253a55; font-size: 20px; font-weight: bold;">Hi {{ $name }},</p>

            <p style="margin: 0 0 16px; color: #334155; font-size: 14px; line-height: 1.6;">
                We received a request to reset the password for your JackYak account.
            </p>

            <p style="margin: 0 0 24px; color: #334155; font-size: 14px; line-height: 1.6;">
                <strong>If this is you</strong> and you are changing your password, click the button below:
            </p>

            <div style="text-align: center; margin: 0 0 24px;">
                <a href="{{ $url }}" style="display: inline-block; background-color: #2d8a8a; color: #ffffff; font-size: 15px; font-weight: bold; text-decoration: none; padding: 13px 36px; border-radius: 9px;">Reset My Password</a>
            </div>

            <p style="margin: 0 0 8px; color: #768091; font-size: 12px; line-height: 1.6;">
                Button not working? Copy and paste this link into your browser:
            </p>
            <p style="margin: 0 0 24px; color: #2d8a8a; font-size: 12px; word-break: break-all;">{{ $url }}</p>

            <hr style="border: none; border-top: 1px solid #e7eff0; margin: 0 0 16px;">

            <p style="margin: 0; color: #768091; font-size: 13px; line-height: 1.6;">
                <strong>Didn&rsquo;t ask for this?</strong> Just leave this email as it is — your password stays exactly the same and your account is safe. This link works once and expires in 60 minutes.
            </p>
        </div>

        {{-- Footer --}}
        <p style="margin: 16px 0 0; text-align: center; color: #989ead; font-size: 11px;">
            &copy; 2026 JackYak. Helping travelers explore Nepal.
        </p>
    </div>
</body>
</html>
