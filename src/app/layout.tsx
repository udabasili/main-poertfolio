import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import StyledJsxRegistry from './lib/registry';
import { header, paragraph } from './constant/font';
import colors from './constant/color';


export const metadata: Metadata = {
  title: " Home | Udendu Portfolio   | Great Website Developer",
  description: "A top SEO description for a freelance web developer in Canada and the United States specializing in JavaScript, C#, Java, and Node.js could be: Experienced freelance web developer in Canada and the United States, offering expertise in JavaScript, C#, Java, and Node.js. Proven track record in delivering high-quality, customized web solutions for businesses of all sizes. Get professional web development services tailored to your needs today",
  generator: 'Next.js',
  applicationName: 'Next.js',
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
    description: "A top SEO description for a freelance web developer in Canada and the United States specializing in JavaScript, C#, Java, and Node.js could be: Experienced freelance web developer in Canada and the United States, offering expertise in JavaScript, C#, Java, and Node.js. Proven track record in delivering high-quality, customized web solutions for businesses of all sizes. Get professional web development services tailored to your needs today",
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

      </head>

      <body>
        <Analytics />
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
