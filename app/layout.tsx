import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://dennynj.in"),

  title: {
    default: "Denny N J | Full Stack Developer",
    template: "%s | Denny N J",
  },

  description:
    "Portfolio of Denny N J, a Full Stack Developer specializing in Next.js, Node.js, MongoDB, Laravel, and TypeScript. Building scalable, secure, and modern web applications.",

  keywords: [
    "Denny N J",
    "Denny NJ",
    "Denny",
    "Developer Portfolio",
    "Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "Node.js Developer",
    "React Developer",
    "TypeScript Developer",
    "MongoDB Developer",
    "Laravel Developer",
    "Web Developer Kerala",
    "Software Developer Kerala",
    "Portfolio",
  ],

  authors: [{ name: "Denny N J" }],

  creator: "Denny N J",
  publisher: "Denny N J",

  alternates: {
    canonical: "https://dennynj.in",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Denny N J | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, Node.js, MongoDB, Laravel, and TypeScript.",
    url: "https://dennynj.in",
    siteName: "Denny N J Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Denny N J Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Denny N J | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, Node.js, MongoDB, Laravel, and TypeScript.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
