import type { Metadata } from "next";
import { Istok_Web } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const istok = Istok_Web({
  subsets: ["latin"],
  weight: ["400", "700"], // обычный и bold
  variable: "--font-istok",
});

export const metadata: Metadata = {
  title: "My Blog",
  description: "Blog App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={istok.variable}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
