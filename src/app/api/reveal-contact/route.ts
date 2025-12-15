import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    // Verify hCaptcha token
    const verifyResponse = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.HCAPTCHA_SECRET_KEY!,
        response: token
      }).toString()
    });

    const result = await verifyResponse.json();

    if (result.success) {
      const fake = `
        <p>Message me on Discord: <strong>@zytrondev</strong> | <strong><a class="link" href="https://discord.gg/fakeInvite">discord.gg/zytrondev</a></strong></p>
        <p>Check out my GitHub: <strong><a class="link" href="https://github.com/github">github.com/zytrondev</a></strong></p>
<!--        <p>Connect with me on LinkedIn: <strong><a class="link" href="https://www.linkedin.com/github">linkedin.com/zytrondev</a></strong></p>-->
        <p>Email me: <strong><a class="link" href="mailto:fakeemail@example.com" target="_blank">zytronium.dev@example.com</a></strong></p>
        <p class="tiny-note">This email is temporary and might not work. If you need help, double check this email.</p>
      `;

      const real = `
        <p>Message me on Discord: <strong>${process.env.DISCORD_HANDLE}</strong> | <strong><a class="link" href="${process.env.DISCORD_INVITE}">${process.env.DISCORD_INVITE?.replace('https://', '')}</a></strong></p>
        <p>Check out my GitHub: <strong><a class="link" href="${process.env.GITHUB_LINK}">${process.env.GITHUB_LINK?.replace('https://', '')}</a></strong></p>
<!--        <p>Connect with me on LinkedIn: <strong><a class="link" href="${process.env.LINKED_IN_LINK}">${process.env.LINKED_IN_LINK?.replace('https://www.', '')}</a></strong></p>-->
        <p>Email me: <strong><a class="link" href="mailto:${process.env.CONTACT_EMAIL}" target="_blank">${process.env.CONTACT_EMAIL}</a></strong></p>
        <p class="tiny-note">
          Some modern bots can pass captcha challenges too. I don't wish for bots to start spamming my email,
          so this email is a temporary alias that I change whenever I start getting spam mail. This forwards
          directly to a special folder I created in my inbox. I will ignore your email if I think it's spam.
        </p>
      `;

      return NextResponse.json({
        success: true,
        fake,
        real
      });
    }

    return NextResponse.json({ success: false });
  } catch (error) {
    console.error('Captcha verification error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}