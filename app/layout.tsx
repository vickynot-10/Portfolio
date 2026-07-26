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
  authors: [{ name: "Vignesh", url: "https://github.com/vickynot-10" }],
  creator: "Vignesh",
  alternates: {
    canonical: "https://vickynot.vercel.app",
  },
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

const person_json_ld = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vignesh",
  jobTitle: "Software Engineer",
  url: "https://vickynot.vercel.app",
  sameAs: [
    "https://github.com/vickynot-10",
    "https://www.linkedin.com/in/vignesh-s-512245293/",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madurai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "Python",
    "C",
    "C++",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Socket.IO",
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person_json_ld) }}
        />
      </head>
      <body className="min-h-full">
        <Analytics />
        <SpeedInsights />
        <AppWrapper children={children} />
      </body>
    </html>
  );
}