import { Layout } from '@/components/Layout';
import { headers } from 'next/headers';

export async function generateMetadata({ params }: { params: { slug: string } }) {

  return {
    title: " About | Expert Freelance Web Developer | JavaScript, C#, Java, Node.js | Canada & US",
    description: "Udendu Abasili: Your Trusted Freelance Web Developer for US & Canada. With a passion for crafting dynamic, user-centric websites, I bring expertise in JavaScript, C#, Java, Node.js, and more. Let's collaborate to bring your digital vision to life",
    url: "https://www.udabasili.online/about",
    alternates: {
      canonical: "https://www.udabasili.online/about"
    },
    openGraph: {
      title: " About | Udendu Portfolio | Expert Freelance Web Developer",
      description: "Udendu Abasili: Your Trusted Freelance Web Developer for US & Canada. With a passion for crafting dynamic, user-centric websites, I bring expertise in JavaScript, C#, Java, Node.js, and more. Let's collaborate to bring your digital vision to life",
      url: "https://www.udabasili.online/about",
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
