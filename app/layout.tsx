import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rhenald Nainggolan | Software Engineer",
  description:
    "Portfolio of Rhenald Nainggolan, an Informatics Engineering graduate focused on software engineering, web development, and data analytics.",
  openGraph: {
    title: "Rhenald Nainggolan | Software Engineer",
    description:
      "Selected web and backend projects by Rhenald Nainggolan.",
    url: "https://rhenald-portofolio.vercel.app",
    siteName: "Rhenald Nainggolan Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Rhenald Nainggolan | Software Engineer",
    description:
      "Selected web and backend projects by Rhenald Nainggolan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
