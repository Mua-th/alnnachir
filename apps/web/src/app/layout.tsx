import Header from "@/components/comp/header";
import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="ar">
      <body className={`${inter.className} ` }>
        <Header></Header>
        <div className="p-2 md:p-12 lg:p-24">
          
         {children}
        </div>
        </body>
    </html>
  );
}
