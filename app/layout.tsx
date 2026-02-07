import type { Metadata } from "next";
import "./globals.css";
import { organizationSchema, localBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Kimani Wambua & Company Advocates | Legal Services in Nairobi, Kenya",
  description: "Professional legal services in Nairobi. Specializing in Property Law, Banking Securities, Commercial Law, Litigation, and Company Secretarial Services. Established 2015.",
  keywords: "lawyers nairobi, advocates kenya, property law, commercial law, litigation, banking law, company secretarial services",
  authors: [{ name: "Kimani Wambua & Company Advocates" }],
  openGraph: {
    title: "Kimani Wambua & Company Advocates",
    description: "We provide amicable legal solutions",
    siteName: "Kimani Wambua & Company Advocates",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
