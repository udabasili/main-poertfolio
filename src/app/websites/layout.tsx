import type { Metadata } from "next";
import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: " Websites |  ! Expert Freelance Web Developer | JavaScript, C#, Java, Node.js | Canada & US",

};

export default function WebsitesLayout({
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
