import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Texno Art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "#F0F0F0" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
