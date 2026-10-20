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
  title: "Rhenald Nainggolan — Software Engineer",
  description:
    "Rhenald Nainggolan is a software engineer focused on backend systems, web applications, and cloud data operations.",
  openGraph: {
    title: "Rhenald Nainggolan — Software Engineer",
    description:
      "Explore the selected projects and experience of Rhenald Nainggolan, a software engineer working across backend, web, and data.",
    url: "https://rhenald-portofolio.vercel.app",
    siteName: "Rhenald Nainggolan Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Rhenald Nainggolan — Software Engineer",
    description:
      "Selected projects and experience across backend, web, and data.",
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
