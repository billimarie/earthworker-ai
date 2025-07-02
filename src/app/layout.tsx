import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Earthworker AI',
  description: 'AI with a focus on sustainability and carbon offsetting.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const adBlockingRecoveryTagSrc = "https://fundingchoicesmessages.google.com/i/pub-9937772838198466?ers=1";

  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-9937772838198466" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />

        {adClientId && (
          <Script
            id="adsbygoogle-init"
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClientId}`}
          />
        )}

        {adClientId && (
          <Script
            async
            src={adBlockingRecoveryTagSrc}
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="font-body antialiased">
        {children}
        {/* Funding Choices iframe */}
        <iframe
          name="googlefcPresent"
          style={{
            display: "none",
            width: "0px",
            height: "0px",
            border: "none"
          }}
        />
        <Toaster />
      </body>
    </html>
  );
}
