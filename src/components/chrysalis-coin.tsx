'use client';

import type { FC, SVGProps, ElementType, HTMLAttributes } from 'react';
import { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { cn } from '@/lib/utils';
import type { TiltOptions } from 'vanilla-tilt';

interface ChrysalisCoinProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string;
  imageUrl: string;
  mainIcon: ElementType<SVGProps<SVGSVGElement>>;
}

const ChrysalisCoin: FC<ChrysalisCoinProps> = ({
  name,
  description,
  imageUrl,
  mainIcon: MainIcon,
  className,
  ...props
}) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;
    if (tiltNode) {
      const options: TiltOptions = {
        max: 25,
        speed: 500,
        perspective: 1800,
        glare: true,
        'max-glare': 0.25,
        scale: 1.05,
      };
      VanillaTilt.init(tiltNode, options);
    }
    return () => {
      if (tiltNode && (tiltNode as any).vanillaTilt) {
        (tiltNode as any).vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={tiltRef}
      className={cn(
        "glass relative block w-full max-w-[320px] aspect-square rounded-full overflow-hidden bg-cover bg-center",
  // Default shadows and transforms
  "shadow-[0_0_0_2px_rgba(255,214,102,0.4),0_0_3px_3px_rgba(255,214,102,0.2)]",
  "transform transition-transform duration-150 ease-out",
  // Hover lifts up
  "hover:-translate-y-1 hover:shadow-[0_0_0_3px_rgba(255,214,102,0.6),0_0_10px_12px_rgba(255,214,102,0.25)]",
  "active:transform active:transition-transform active:duration-150 active:ease-in-out active:opacity-80",
  className
      )}
      {...props}
    >
      
        <div className="transform transition-transform duration-150 ease-out absolute inset-[20px] rounded-full pointer-events-none z-10 shadow-[inset_0.5px_0.5px_1.5px_rgba(255,235,180,0.6),_inset_-1px_-1px_1px_rgba(160,110,0,0.5),_inset_3px_3px_6px_rgba(0,0,0,0.25)] border border-orange-300/20"></div>
    
        <div className="z-90 inner-glass absolute top-0 bottom-0 right-0 left-0 inset-[20px] rounded-full overflow-hidden flex flex-col justify-center items-center p-6 text-center w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-700/90 via-yellow-500/80 to-amber-800 pointer-events-none z-10 rounded-full"></div>

            <div className="relative z-20 text-slate-50 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
              <MainIcon className="w-40 h-40 text-amber-700/90 stroke-1 text-center mx-auto" />
            </div>
        </div>
            
    </div>
  );
};

export default ChrysalisCoin;
