import type { Metadata } from "next";
import StyledJsxRegistry from '../lib/registry';
import "../globals.css";
import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: " Projects | Expert Freelance Web Developer | JavaScript, C#, Java, Node.js | Canada & US ",
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
