import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { Toaster } from "@/components/ui/sonner"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "WIT Club",
    template: "%s | WIT Club",
  },
  description: "WIT Club - Fostering a collaborative and inclusive environment for students and faculty. Join us for exciting events, workshops, and more.",
  describe: "WIT Club",
  keywords: ["WIT Club", "wit club", "wit", "club", "college club", "student club", "events",
    "workshops", "Vedant Navale", "Walchand solpur", "walchand solapur campus", "walchand institute of technology",
    "walchand institute of technology solapur address", 'walchand college solapur address',
    "walchand college solapur contact number", "solapur", "solapur club", "solapur collage", "solapur wit", "wit solapur",
    "wit boys hostel", "walchand club"
  ],
  author: "WIT Club",
  metadataBase: new URL("https://witerror404.college-domain.com/"),
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo1.png" type="image/png" sizes="16x16" />
      <body className={`cabinet bg-background scroll-smooth text-foreground dark:bg-dark-mode dark:text-foreground transition-colors duration-300`}>
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900,1&display=swap" rel="stylesheet"></link>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
