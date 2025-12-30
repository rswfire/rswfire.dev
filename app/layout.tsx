export const metadata = {
    title: "rswfire.dev",
    description: "Work, systems, and signal surfaces by rswfire"
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
