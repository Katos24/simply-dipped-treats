import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Simply Dipped Treats | Homemade Desserts & Greek Food",
  description: "Homemade brownie bites, cake pops, rice krispies, and authentic Greek spanakopita. Made fresh in Holbrook, NY.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
