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
      style={{ backgroundImage: `url(${imageUrl})` }}
      {...props}
    >
      
        <div className="transform transition-transform duration-150 ease-out absolute inset-[12px] rounded-full pointer-events-none z-10 shadow-[inset_0.5px_0.5px_1.5px_rgba(255,235,180,0.6),_inset_-1px_-1px_1px_rgba(160,110,0,0.5),_inset_3px_3px_6px_rgba(0,0,0,0.25)] border border-orange-300/20"></div>
    
        <div className="inner-glass absolute top-0 bottom-0 right-0 left-0 inset-[12px] rounded-full overflow-hidden flex flex-col justify-center items-center z-[5] p-6 text-center w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-black/30 to-black/40 pointer-events-none z-10 rounded-full"></div>

            <div className="relative z-20 text-slate-50 [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] mt-10">
                <h1 className="font-serif-display text-4xl lg:text-5xl font-bold mb-1 tracking-wide flex items-center justify-center gap-3 ">
                    <MainIcon className="w-9 h-9 opacity-80" />
                    {name}
                </h1>
                <p className="text-slate-300 text-sm font-light">{description}</p>
            </div>

            <button className="relative z-20 bg-gradient-to-br from-yellow-300 to-yellow-500 text-amber-900 font-semibold py-2 px-4 rounded-full w-auto min-w-[120px] max-w-[85%] mx-auto mt-6 transition-all duration-300 ease-in-out border-none shadow-[inset_2px_2px_4px_rgba(160,110,0,0.6),inset_-2px_-2px_4px_rgba(255,245,200,0.5),0_1px_2px_rgba(0,0,0,0.1)] hover:bg-gradient-to-br hover:from-yellow-200 hover:to-yellow-400 hover:shadow-[inset_2px_2px_5px_rgba(160,110,0,0.5),inset_-2px_-2px_5px_rgba(255,245,200,0.6),0_2px_4px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:bg-gradient-to-br active:from-yellow-400 active:to-yellow-600 active:shadow-[inset_-2px_-2px_4px_rgba(160,110,0,0.6),inset_2px_2px_4px_rgba(255,245,200,0.5)] active:translate-y-0 flex items-center justify-center gap-2 tracking-wide">
            Collect
            </button>
        </div>
            
    </div>
  );
};

export default ChrysalisCoin;
