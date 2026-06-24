import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-ignore: Allow side-effect CSS import without type declarations
import "@style/global.css";



const inter = Inter({
      variable: "--font-inter",
      subsets: ["latin"],
      weight: ["400", "500", "600", "700"],
      display: "swap",
});

export const metadata: Metadata = {
      title: "Nexluma",
      description: "Nexluma application",
};

export default function RootLayout({
      children,
}: Readonly<{
      children: React.ReactNode;
}>) {
      return (
            <html lang="en">
                  <body className={inter.variable}>{children}</body>
            </html>
      );
}