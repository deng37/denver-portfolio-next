import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import BootstrapClient from "@/components/BootstrapClient";
import StoreProvider from '@/components/providers/StoreProvider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Denver Portfolio",
  description: "Senior Software Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BootstrapClient />
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
