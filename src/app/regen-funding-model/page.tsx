import Header from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Zap, Leaf, Shield, Users, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function RegenFundingModelPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col gap-8 p-4 md:p-8">
        <div className="max-w-4xl mx-auto w-full">
          <Button asChild variant="ghost" className="mb-4 -ml-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">A Real Impact Funding and Action Model</CardTitle>
              <CardDescription>
                Our financial and operational blueprint for turning engagement into measurable restoration.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 pt-6">
              <section>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Engagement to Action</h3>
                    <p className="text-muted-foreground">
                      Every query you make, ad you see, or contribution you provide generates micro-revenue. This is pooled and directly converted into tangible, on-the-ground regenerative actions.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Funding Allocation</h3>
                    <p className="text-muted-foreground">
                      We allocate funds with precision: 40% to soil regeneration (seeds, compost), 30% to water conservation projects, 20% to biodiversity initiatives, and 10% to operational costs and platform growth.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Impact Verification</h3>
                    <p className="text-muted-foreground">
                      We ensure accountability through a multi-layered verification process including digital receipts for all purchases, geotagged photos of projects, and periodic third-party audits by environmental partners.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Who Does the Work</h3>
                    <p className="text-muted-foreground">
                      The work is carried out by our dedicated non-profit arm, in collaboration with vetted local partners, community volunteers, and expert contractors to maximize efficiency and local benefits.
                    </p>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
