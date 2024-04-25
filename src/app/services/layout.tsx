import type { Metadata } from "next";
import StyledJsxRegistry from '../lib/registry';
import "../globals.css";
import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: " Services | Expert Freelance Web Developer | JavaScript, C#, Java, Node.js | Canada & US",
  description: "Udendu Abasili, your expert freelance developer for web and mobile solutions in the US and Canada. Specializing in UI/UX design and SEO optimization, I craft engaging digital experiences that elevate your online presence and drive success. Let's collaborate to turn your vision into reality"
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
