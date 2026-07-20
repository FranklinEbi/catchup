import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("", "font-sans", inter.variable)}
    >
      <body>
         <nav className="px-5">
            <header className="text-lg font-bold">Catchup</header>
        </nav>
        {children}
    <footer className="sticky bottom-0 text-xs text-muted-foreground ml-1">Created by Franklin Ebi.</footer>
        </body>
    </html>
  );
}
