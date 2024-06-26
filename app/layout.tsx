import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "./common/container";
import { TitleBar } from "./common/title-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thai Translations",
  description: "A collection of Thai translations for practice and learning.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen flex flex-col">
          <TitleBar />
          <div className="flex justify-center overflow-hidden">
            <Container className="m-4 space-y-4 max-md:w-full md:w-184">
              {children}
            </Container>
          </div>
        </div>
      </body>
    </html>
  );
}
