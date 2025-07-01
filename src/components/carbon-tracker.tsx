import { Leaf } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function CarbonTracker() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Carbon Offset</CardTitle>
          <Leaf className="h-6 w-6 text-primary" />
        </div>
        <CardDescription>
          Your queries help plant trees with ForEveryStarATree.org
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Total CO₂ Offset</p>
          <p className="text-3xl font-bold">0.015kg</p>
        </div>
        <div>
          <Progress value={33} aria-label="Progress towards next tree" />
          <p className="text-xs text-muted-foreground mt-2">
            33% of the way to funding the next tree!
          </p>
        </div>
      </CardContent>
    </Card>
  );
}