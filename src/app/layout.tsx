import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/app-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teste técnico Ecto 2025",
  description: "Meu teste técnico para a vaga de estágio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <AppProvider>
        <body className={`${inter.variable} antialiased`}>{children}</body>
      </AppProvider>
    </html>
  );
}
