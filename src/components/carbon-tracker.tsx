import { Leaf } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CarbonTrackerProps {
  queryCount: number;
}

export default function CarbonTracker({ queryCount }: CarbonTrackerProps) {
  // Variables from the Regenerative AI Query Impact Model
  const R = 0.0015; // Revenue per query
  const Csqft = 0.1; // Cost to regenerate 1 sq ft
  const COsqft = 500; // Carbon offset per sq ft regenerated per year (g CO₂)
  const WSsqft = 100; // Water saved per sq ft regenerated per year (liters)
  const CEGemini = 1.6; // Carbon emissions per Gemini query (g CO₂)
  const WCGemini = 0.025; // Water consumption per Gemini query (liters)
  const Q = queryCount;

  // Core Calculations
  const totalRevenue = Q * R;
  const sqFtRegenerated = totalRevenue / Csqft;
  const totalCOOffset = sqFtRegenerated * COsqft;
  const totalWSSaved = sqFtRegenerated * WSsqft;
  const totalCEQueries = Q * CEGemini;
  const totalWCQueries = Q * WCGemini;

  // Net Impact
  const netCarbon = totalCOOffset - totalCEQueries;
  const netWater = totalWSSaved - totalWCQueries;

  const formatNumber = (num: number) => {
    return num.toLocaleString(undefined, {
      maximumFractionDigits: 1,
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Your Impact</CardTitle>
          <Leaf className="h-6 w-6 text-primary" />
        </div>
        <CardDescription>
          Each query helps regenerate the planet.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3 text-sm">
          <span role="img" aria-label="sapling" className="text-xl">
            🌱
          </span>
          <p>
            You helped regenerate{" "}
            <span className="font-bold text-primary">
              {formatNumber(sqFtRegenerated)} sq ft
            </span>{" "}
            of desertified land.
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span role="img" aria-label="globe" className="text-xl">
            🌍
          </span>
          <p>
            Net carbon saved:{" "}
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
            Net water retained:{" "}
            <span className="font-bold text-primary">
              {formatNumber(netWater)} liters
            </span>
            .
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
