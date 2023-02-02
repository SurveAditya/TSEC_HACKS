'use client'
import Footer from "Components/Footer";
import Navbar from "Components/Navbar";
import "./globals.css";
import { SessionProvider } from 'next-auth/react';
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en" className={roboto.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
      <SessionProvider refetchOnWindowFocus={false}>
            <Navbar  />
            {children}
            <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
