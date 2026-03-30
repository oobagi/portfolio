import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ThemeScript } from "@/components/theme-provider";
import { TaglineNav } from "@/components/tagline-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { LastUpdated } from "@/components/last-updated";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jadenwatson.dev"),
  title: {
    default: "Jaden Watson",
    template: "%s | Jaden Watson",
  },
  description: "Personal portfolio and blog showcasing my best projects.",
  openGraph: {
    title: "Jaden Watson",
    description: "Personal portfolio and blog showcasing my best projects.",
    url: "https://jadenwatson.dev",
    siteName: "Jaden Watson",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jaden Watson — Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@jadenwatson",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={GeistSans.variable}>
      <head>
        <ThemeScript />
      </head>
      <body>
        <div className="site">
          <header className="site-header">
            <TaglineNav />
          </header>

          <main className="site-body">
            {children}
          </main>

          <footer className="site-footer">
            <ThemeToggle />
            <nav className="footer-links">
              <a href="https://github.com/oobagi" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="mailto:jadenwatsond@gmail.com">Email</a>
            </nav>
            <LastUpdated />
          </footer>
        </div>
      </body>
    </html>
  );
}
