import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import AppWrapper from "@/components/AppWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vickynot.vercel.app"),
  title: "Vignesh | Software Engineer",
  description:
    "Full-stack developer specializing in React, Node.js, and real-time systems.",
  keywords: [
    "Vignesh",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Socket.IO",
    "Tamil Nadu",
    "Madurai",
  ],
  authors: [{ name: "Vignesh", url: "https://github.com/vickynot-10" }],
  creator: "Vignesh",
  icons: {
    icon: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vickynot.vercel.app/",
    title: "Vignesh | Software Engineer",
    description:
      "Full-stack developer specializing in React, Node.js, and real-time systems.",
    siteName: "Vignesh Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "x1thV2rivNQSFGq_tTfFORz2HTx9BT2BpeU1xtAb_yw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Analytics />
        <SpeedInsights />
        <AppWrapper children={children} />
      </body>
    </html>
  );
}
