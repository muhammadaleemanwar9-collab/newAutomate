import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "Automate - Grow Your Business with AI",
  description:
    "Transform your business profile with intelligent automation. Boost growth, improve customer satisfaction, and scale efficiently.",
  keywords:
    "automation, business growth, AI automation, customer service, business automation",
  authors: [{ name: "Automate Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Automate - Grow Your Business with AI",
    description: "Transform your business profile with intelligent automation.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="google-site-verification" content="" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
