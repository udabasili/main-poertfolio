export async function generateMetadata({ params }: { params: { slug: string } }) {
    return {
        title: `${params.slug} | Expert Freelance Web Developer | JavaScript, C#, Java, Node.js | Canada & US`,
    }
}


export default function WebsitesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
