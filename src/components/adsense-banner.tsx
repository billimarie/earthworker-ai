import { DollarSign, Zap, Leaf, Shield, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
    <Card>
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
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>A Real Impact Funding and Action Model</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Our financial and operational blueprint for turning engagement into measurable restoration.
              </p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Engagement to Action</h4>
                    <p className="text-muted-foreground">
                      Every query you make, ad you see, or contribution you provide generates micro-revenue. This is pooled and directly converted into tangible, on-the-ground regenerative actions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Funding Allocation</h4>
                    <p className="text-muted-foreground">
                      We allocate funds with precision: 40% to soil regeneration (seeds, compost), 30% to water conservation projects, 20% to biodiversity initiatives, and 10% to operational costs and platform growth.
                    </p>
                  </div>
                </div>
                 <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Impact Verification</h4>
                    <p className="text-muted-foreground">
                      We ensure accountability through a multi-layered verification process including digital receipts for all purchases, geotagged photos of projects, and periodic third-party audits by environmental partners.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Who Does the Work</h4>
                    <p className="text-muted-foreground">
                      The work is carried out by our dedicated non-profit arm, in collaboration with vetted local partners, community volunteers, and expert contractors to maximize efficiency and local benefits.
                    </p>
                  </div>
                </div>
              </div>

            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
