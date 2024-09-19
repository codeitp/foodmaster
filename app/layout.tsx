import { josephan } from "./fonts";
import "./globals.css";
import * as React from "react";
import Providers from "@/providers";
import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

// SEO GLOBAL
export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SERVER_URL}`),
  applicationName: "Foodmasters",
  keywords: ["nextjs", "reactjs", "ecommerce", "foodmasters"],
  authors: [{ name: "sylvaincodes", url: "https://github.com/codeitp" }],
  publisher: "vercel",

  alternates: {
    canonical: "/",
    languages: {
      en: "en",
    },
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      noimageindex: true,
    },
  },

  manifest: `${process.env.NEXT_PUBLIC_SERVER_URL}/manifest.webmanifest`,

  icons: {
    icon: "/assets/images/logo.svg",
    shortcut: "/assets/images/logo.svg",
    apple: "/assets/images/logo.svg",
  },

  openGraph: {
    title: "",
    description: "",

    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/assets/images/og.png`,
      },
    ],
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
    siteName: "NextJs App",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen  ${josephan.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
