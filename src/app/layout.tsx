import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Hussen | Backend Architect & Software Engineer",
  description: "Portfolio of Mohammed Hussen, a high-performance backend architect specialized in systems engineering, serving Afar regions and beyond with scalable software solutions.",
  keywords: [
    "Mohammed Hussen",
    "Mohammed Hussen Afar",
    "Mohammed Hussen Software Developer",
    "Afar Region Softwares",
    "Afar Ethiopia Software Engineer",
    "Backend Architect Ethiopia",
    "GoLang Rust Python Afar",
    "Systems Engineering Afar",
    "Web Development Afar",
    "Scalable Backend Systems",
    ""
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Mohammed Hussen | Backend Architect",
    description: "Leading software development and systems architecture from the Afar region to the world.",
    url: "https://github.com/awash-dev",
    siteName: "Mohammed Hussen Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning tabIndex={-1}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
