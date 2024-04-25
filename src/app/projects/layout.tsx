
import { Layout } from '@/components/Layout';
import { headers } from 'next/headers';

export async function generateMetadata() {

  const headersList = headers();
  const domain = headersList.get('host') || "";
  const fullUrl = headersList.get('referer') || "";

  return {
    title: " Projects | Expert Freelance Web Developer | JavaScript, C#, Java, Node.js | Canada & US",
    description: "Udendu Abasili: Your Trusted Freelance Web Developer for US & Canada. With a passion for crafting dynamic, user-centric websites, I bring expertise in JavaScript, C#, Java, Node.js, and more. Let's collaborate to bring your digital vision to life",
    url: fullUrl,
    alternates: {
      canonical: fullUrl
    },
    openGraph: {
      title: " Projects | Udendu Portfolio | Expert Freelance Web Developer",
      description: "Udendu Abasili: Your Trusted Freelance Web Developer for US & Canada. With a passion for crafting dynamic, user-centric websites, I bring expertise in JavaScript, C#, Java, Node.js, and more. Let's collaborate to bring your digital vision to life",
      url: fullUrl,
      site_name: "Udendu Portfolio",
      locale: "en_US",
      type: "website",
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}
