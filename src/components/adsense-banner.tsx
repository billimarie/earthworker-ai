import { DollarSign, Info } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { ImpactData } from "@/services/impact-service";
import { Skeleton } from "@/components/ui/skeleton";
import Adsense from "./adsense";

interface AdsenseBannerProps {
  impactData: ImpactData | null;
}

export default function AdsenseBanner({ impactData }: AdsenseBannerProps) {
  const adSlot = "9214589741";

  const formatCurrency = (num?: number) => {
    if (num === undefined || num === null) return '$0.00';
    return num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const netProfit = (impactData?.adRevenue || 0) - (impactData?.operationalCosts || 0);

  return (
    <Card className="w-full md:w-1/2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Our Regenerative Funding Model</CardTitle>
          <DollarSign className="h-6 w-6 text-muted-foreground" />
        </div>
        <CardDescription>
          Transparency on how ad revenue helps us regenerate the Earth.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-around text-center p-4 bg-muted/50 rounded-lg">
          <div>
            <p className="text-sm text-muted-foreground">Total Ad Revenue</p>
            {impactData ? (
              <p className="text-2xl font-bold text-primary">{formatCurrency(impactData.adRevenue)}</p>
            ) : (
              <Skeleton className="h-8 w-24 mx-auto mt-1" />
            )}
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Net Profit/Loss</p>
            {impactData ? (
              <p className={`text-2xl font-bold ${netProfit >= 0 ? 'text-primary' : 'text-destructive'}`}>
                {formatCurrency(netProfit)}
              </p>
            ) : (
               <Skeleton className="h-8 w-24 mx-auto mt-1" />
            )}
          </div>
        </div>

        <div className="flex items-center justify-center h-40 bg-background/50 rounded-lg overflow-hidden my-4">
          <Adsense
            adSlot={adSlot}
            style={{ display: "block" }}
            className="w-full h-full"
          />
        </div>
        
        <Button asChild className="w-full">
            <Link href="/regen-funding-model">
                <Info className="mr-2 h-4 w-4" />
                Learn About Our Funding Model
            </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
