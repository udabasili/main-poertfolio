import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import 'aos/dist/aos.css';
import StyledJsxRegistry from './lib/registry';
import { header, paragraph } from './constant/font';
import colors from './constant/color';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AOSInit } from './lib/aos';

export const metadata: Metadata = {
  title: " Home  ! Expert Freelance Web Developer | JavaScript, C#, Java, Node.js | Canada & US",
  description: "Welcome to the digital realm of Udendu Abasili, your trusted freelance web developer for US and Canada clients. Elevate your online presence with bespoke websites and cutting-edge solutions tailored to your business needs. Partner with us to transform your vision into stunning reality and stand out in today's competitive digital landscape",
  generator: 'Next.js',
  applicationName: 'Next.js',
  alternates: {
    canonical: 'https://www.udabasili.online/',
  },
  referrer: 'origin-when-cross-origin',
  keywords: ["Freelance Web Developer Canada", "Freelance Web Developer United States", "JavaScript Developer Canada", "JavaScript Developer United States", "C# Developer Canada", "C# Developer United States", "Java Developer Canada", "Java Developer United States", "Node.js Developer Canada", "Node.js Developer United States"],
  authors: [{ name: 'Udendu Abasili', url: 'https://www.udabasili.online/' }],
  creator: 'Udendu Abasili',
  publisher: 'Udendu Abasili',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'android-chrome-192x192',
      url: '/android-chrome-192x192.png',

    },
  },
  openGraph: {
    title: " Home | Udendu Portfolio   | Great Website Developer",
    description: "Welcome to the digital realm of Udendu Abasili, your trusted freelance web developer for US and Canada clients. Elevate your online presence with bespoke websites and cutting-edge solutions tailored to your business needs. Partner with us to transform your vision into stunning reality and stand out in today's competitive digital landscape",
    url: 'https://www.udabasili.online/',
    siteName: 'Udendu Portfolio',
    locale: 'en_US',
    type: 'website',

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />

      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          :root {
            --title: ${header.style.fontFamily};
						--content: ${paragraph.style.fontFamily};
						--primary: ${colors.primary};
						--primary-dark: ${colors.primaryDark};
						--secondary: ${colors.secondary};
						--secondary-dark: ${colors.secondaryDark};
            --background: ${colors.background};
            --paragraph: ${colors.paragraph};
}
                    `,
          }}
        />
        <meta name="trustpilot-one-time-domain-verification-id" content="ea1ac607-0dd2-4ae5-a8d7-1db1ae6da6c7" />

      </head>
      <body>
        <Analytics />
        <SpeedInsights />
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
