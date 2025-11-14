"use client";
import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import Link from "next/link";
import { audienceVariants } from "@/lib/audienceVariants";

export default function Profile({ audience = "default" }: { audience?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const variant = audienceVariants[audience] ?? audienceVariants["default"];

  return (
    
    <section className="flex items-center justify-between gap-3 border-b px-4 md:px-8 py-4 relative z-50">
      {/* Profile Picture */}
      <div className="flex items-center gap-2">
        <img className="w-16 h-16 rounded-full" src="https://res.cloudinary.com/djrhjkkvm/image/upload/v1754800824/billimarie-2024_asr8hb.jpg" />
        <div>
          <h1 className="text-lg font-medium tracking-loose">
            <span
              className={
                variant?.accentColor ? variant.accentColor : "text-primary"
              }
            >
              username
            </span>
          </h1>
          <p>🌿 Forest Guardian</p>
        </div>
      </div>
      
      {/* Stats */}
      <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
        <div className="flex flex-col justify-between items-center gap-2">
          <p className="text-2xl peer hover:text-primary transition-colors">
            X 
          </p>
          <p>Square Feet</p>
        </div>

        <div className="flex flex-col justify-between items-center gap-2">
          <p className="text-2xl peer hover:text-primary transition-colors">
            X 
          </p>
          <p>Supporters</p>
        </div>

        <div className="flex flex-col justify-between items-center gap-2">
          <p className="text-2xl peer hover:text-primary transition-colors">
            X 
          </p>
          <p>Raised</p>
        </div>

      </nav>
    </section>
  );
}
