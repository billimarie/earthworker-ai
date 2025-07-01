import { DollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Adsense from "./adsense";

export default function AdsenseBanner() {
  const adSlot = "9214589741";

  return (
    <Card className="bg-muted/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Advertisement</CardTitle>
          <DollarSign className="h-6 w-6 text-muted-foreground" />
        </div>
        <CardDescription>
          Ads like this one help us fund our sustainability initiatives.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center h-40 bg-background/50 rounded-lg overflow-hidden">
          <Adsense
            adSlot={adSlot}
            style={{ display: "block" }}
            className="w-full h-full"
          />
        </div>
      </CardContent>
    </Card>
  );
}
