"use client";
import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import Link from "next/link";
import { audienceVariants } from "@/lib/audienceVariants";

export default function ActivityFeed({ audience = "default" }: { audience?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const variant = audienceVariants[audience] ?? audienceVariants["default"];

  return (
    
    <section className="flex-col items-center justify-between gap-3 border-b px-4 md:px-8 py-4 relative z-50">

      {/* Activity Feed Title */}
      
      <div className="flex items-center gap-2 mb-8">
        <h3 className="text-lg font-medium tracking-loose">
            <span
              className={
                variant?.accentColor ? variant.accentColor : "text-primary"
              }
            >
              Activity Feed
            </span>
        </h3>
      </div>
        
      {/* Activity Feed Items */}
      <div className="flex flex-col">
      
        <div className="flex items-center gap-2 mb-8">
          <img className="w-16 h-16 rounded-full" src="https://res.cloudinary.com/djrhjkkvm/image/upload/v1754800824/billimarie-2024_asr8hb.jpg" />
          <div className="flex flex-col">
            <p className="text-md text-gray-400 font-medium tracking-loose">
              4 hours ago
            </p>
            <p>Watered the tiny forest.</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-8">
          <img className="w-16 h-16 rounded-full" src="https://res.cloudinary.com/djrhjkkvm/image/upload/v1754800824/billimarie-2024_asr8hb.jpg" />
          <div className="flex flex-col">
            <p className="text-md text-gray-400 font-medium tracking-loose">
              2 days ago
            </p>
            <p>Joined a community trash day clean-up.</p>
          </div>
        </div>

      </div>
        

        


    </section>
  );
}
