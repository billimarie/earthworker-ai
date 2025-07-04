import { Leaf } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ImpactData } from "@/services/impact-service";
import { Skeleton } from "@/components/ui/skeleton";

interface CarbonTrackerProps {
  impactData: ImpactData | null;
}

export default function CarbonTracker({ impactData }: CarbonTrackerProps) {
  const formatNumber = (num?: number) => {
    return (num || 0).toLocaleString(undefined, {
      maximumFractionDigits: 1,
    });
  };

  if (!impactData) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Our Global Impact</CardTitle>
            <Leaf className="h-6 w-6 text-primary" />
          </div>
          <CardDescription>
            Here's how the AI Forest has positively impacted the planet:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
        </CardContent>
      </Card>
    );
  }

  const { sqFtRegenerated, netCarbon, netWater, biodiversitySpeciesSupported } = impactData;

  return (
    <Card className="w-full sm:w-1/2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Our Impact Metrics</CardTitle>
          <Leaf className="h-6 w-6 text-primary" />
        </div>
        <CardDescription>
        Here's our regenerative AI Forest data:
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3 text-sm">
          <span role="img" aria-label="sapling" className="text-xl">
            🌱
          </span>
          <p>
            Healthy Soil restored:{" "}
            <span className="font-bold text-primary">
              {formatNumber(sqFtRegenerated)} sq ft
            </span>.{" "}
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span role="img" aria-label="globe" className="text-xl">
            🌍
          </span>
          <p>
            Net Carbon saved:{" "}
            <span className="font-bold text-primary">
              {formatNumber(netCarbon)} grams CO₂
            </span>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span role="img" aria-label="water drop" className="text-xl">
            💧
          </span>
          <p>
            Net Water retained:{" "}
            <span className="font-bold text-primary">
              {formatNumber(netWater)} liters
            </span>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span role="img" aria-label="butterfly" className="text-xl">
            🦋
          </span>
          <p>
            Biodiversity increased:{" "}
            <span className="font-bold text-primary">
              {formatNumber(biodiversitySpeciesSupported)} species
            </span>.{" "}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
