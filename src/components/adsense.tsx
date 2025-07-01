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
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  const adClientId = "ca-pub-3940256099942544";

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
