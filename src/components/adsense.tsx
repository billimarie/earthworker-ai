"use client";

import React, { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

type AdsenseProps = {
  className?: string;
  style?: React.CSSProperties;
  adSlot: string;
  adFormat?: string;
  adLayoutKey?: string;
};

const Adsense: React.FC<AdsenseProps> = ({
  className,
  style,
  adSlot,
  adFormat = "auto",
  adLayoutKey,
}) => {
  const adClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (adClientId) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense error:", err);
      }
    }
  }, [adClientId]);

  if (!adClientId) {
    return (
      <div className="flex items-center justify-center h-full bg-muted text-muted-foreground text-sm p-4 text-center">
        Your ad could be here! Just set your AdSense Client ID in the environment variables.
      </div>
    );
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={adClientId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-ad-layout-key={adLayoutKey}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default Adsense;
