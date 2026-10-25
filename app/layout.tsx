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
  title: "Rhenald Nainggolan — Backend Software Engineer",
  description:
    "Rhenald Nainggolan is a backend-focused software engineer with hands-on experience in cloud data operations and practical web applications.",
  openGraph: {
    title: "Rhenald Nainggolan — Backend Software Engineer",
    description:
      "Explore the projects and experience of Rhenald Nainggolan across backend software, REST APIs, and cloud data operations.",
    url: "https://rhenaldnainggolan.vercel.app",
    siteName: "Rhenald Nainggolan Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Rhenald Nainggolan — Backend Software Engineer",
    description:
      "Backend software projects and hands-on experience in cloud data operations.",
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
