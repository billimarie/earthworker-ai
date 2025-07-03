'use client';

import { useState, useEffect, type ElementType, type SVGProps } from 'react';
import * as icons from 'lucide-react';
import { chrysalisVariants } from '@/lib/chrysalisVariants';
import ChrysalisCoin from './chrysalis-coin';
import { Card, CardContent } from './ui/card';
import { Skeleton } from './ui/skeleton';

// A type guard to check if a key is a valid Lucide icon name
function isLucideIcon(key: string): key is keyof typeof icons {
  return key in icons;
}

// Default coin to show if today's isn't found or during loading
const defaultVariant = {
  date: "2024-01-05", // Defaulting to Mycelial Web to match the image
  name: "Mycelial Web",
  description: "The unseen network connecting all life.",
  icon: "Network",
};
const DefaultIcon = icons.Network;

export default function ChrysalisCoinsDisplay() {
  const [todaysVariant, setTodaysVariant] = useState(defaultVariant);
  const [IconComponent, setIconComponent] = useState<ElementType<SVGProps<SVGSVGElement>>>(() => DefaultIcon);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This runs only on the client, after hydration
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const todaysDateString = `${year}-${month}-${day}`;

    const variant = chrysalisVariants.find(v => v.date === todaysDateString) || defaultVariant;
    
    setTodaysVariant(variant);

    if (variant.icon && isLucideIcon(variant.icon)) {
        const lucideIcon = icons[variant.icon];
        if (lucideIcon) {
            setIconComponent(() => lucideIcon);
        } else {
            setIconComponent(() => DefaultIcon);
        }
    } else {
        setIconComponent(() => DefaultIcon);
    }

    setIsLoading(false);
  }, []);

  const imageUrl = "https://res.cloudinary.com/djrhjkkvm/image/upload/v1751496176/AI/ai-mechanical-earthworm_the-ai-forest_vfcsdm.webp";

  if (isLoading) {
    return (
        <Card className="bg-transparent border-none shadow-none rounded-none">
            <CardContent className="flex flex-col items-center gap-4">
                 <Skeleton className="w-[320px] h-[320px] rounded-full" />
            </CardContent>
        </Card>
    )
  }

  return (
    <Card className="bg-transparent border-none shadow-none rounded-none">
      <CardContent className="flex flex-col items-center gap-4">
        <ChrysalisCoin
          name={todaysVariant.name}
          description={todaysVariant.description}
          imageUrl={imageUrl}
          data-ai-hint="nature abstract"
          mainIcon={IconComponent}
        />
      </CardContent>
    </Card>
  );
}