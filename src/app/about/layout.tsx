import type { Metadata } from "next";
import StyledJsxRegistry from '../lib/registry';
import "../globals.css";
import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: " About ! Expert Freelance Web Developer | JavaScript, C#, Java, Node.js | Canada & US",
  description: "Udendu Abasili: Your Trusted Freelance Web Developer for US & Canada. With a passion for crafting dynamic, user-centric websites, I bring expertise in JavaScript, C#, Java, Node.js, and more. Let's collaborate to bring your digital vision to life"
};

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
