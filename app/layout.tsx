import "./globals.css";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="la">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
