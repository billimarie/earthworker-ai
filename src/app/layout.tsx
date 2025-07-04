import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';
import AudienceTheme from '@/components/audience-theme';

export const metadata: Metadata = {
  title: 'The AI Forest',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-9937772838198466" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />

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
          {children}
          <Toaster />
        </body>
    </html>
  );
}
