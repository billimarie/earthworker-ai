import { headers } from "next/headers";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "The AI Forest",
  description: "AI with a focus on sustainability and carbon offsetting.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const url = headersList.get("x-next-url") || "";
  const search = url.includes("?") ? url.split("?")[1] : "";
  const searchParams = new URLSearchParams(search);
  const audience = searchParams.get("audience") || "default";

  const adClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-9937772838198466"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
        {adClientId && (
          <Script
            id="adsbygoogle-init"
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClientId}`}
          />
        )}
      </head>
      <body className="font-body antialiased bg-white">
        <Header audience={audience} />
        {children}
        <Footer />
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
