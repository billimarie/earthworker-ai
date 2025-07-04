// ./landing/true-fans/page.tsx

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CarbonTracker from "@/components/carbon-tracker";
import WaitlistCard from "@/components/waitlist-card";
import { useEffect, useState } from "react";
import { fetchImpactData } from "@/app/actions";
import type { ImpactData } from "@/services/impact-service";
import { useSearchParams } from "next/navigation";
import { audienceVariants } from "@/lib/audienceVariants";

export default function TrueFansLanding() {
  const [impactData, setImpactData] = useState<ImpactData | null>(null);
  const searchParams = useSearchParams();
  const audience = searchParams.get("audience") || "default";
  
  useEffect(() => {
    const loadImpact = async () => {
      const data = await fetchImpactData();
      setImpactData(data);
    };
    loadImpact();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 flex flex-col gap-8 px-4 md:px-8 mb-20">

        {/* HERO */}
        <section className="w-full max-w-3xl mx-auto text-center flex flex-col gap-6 text-muted-foreground h-screen justify-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">The Next Chapter of Our Journey Together</h1>
            <div className="text-2xl">Subtitle to give Immediate Clarity</div>
            <Button
                size="lg"
                className="rounded-full font-semibold"
                >
                Claim Your Spot
            </Button>
        </section>
        
        {/* PROBLEM & SOLUTION */}
        <section className="w-full max-w-3xl mx-auto text-center py-16 flex flex-col gap-6 text-muted-foreground">
            <div className="space-y-6 text-lg">
                <p>Dear *Name*,</p>
                <p className="">You believed in every seed I ever planted.</p>
                <p>From the Starry Night Skoolie, to For Every Star A Tree, and even Typewriter Poetry, you've been there throughout the years.</p>
                <p>It's an understatement to say I'm beyond grateful for you.</p>
                <p>Now, I'd like to invite you into something out of the ordinary:</p>
                <p>The AI Forest.</p>
            </div>
            <div>
                *Image: Photos of your desert land. Sketches from your journals. Past project milestones.**
            </div>
            <div className="space-y-6 text-lg">
                <p>The AI Forest is a project that blends everything I care about: regenerative land, poetic storytelling, and our shared hope for future generations to come.</p>
                <p>It combines all my favorite puzzle pieces: play, coding, art, nature, science, spirituality, writing, and of course, Earthcare.</p>
                <p>It would be an absolute honor if you joined me on this next adventure.</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button
                size="lg"
                variant="ghost"
                className="text-muted-foreground underline hover:bg-transparent hover:font-semibold"
                >
                Read the Personal Letter
                </Button>
                <Button
                size="lg"
                className="rounded-full font-semibold"
                >
                Be Part of The AI Forest
                </Button>
            </div>
        </section>

        {/* WHAT IS THE AI FOREST? */}
        <section className="w-full max-w-3xl mx-auto text-center py-16 flex flex-col gap-6 text-muted-foreground">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">What's <span className="underline">The AI Forest</span>?
          </h2>
            <div className="space-y-6 text-lg">
                <p>The AI Forest is my answer to a simple question:</p>
                <p>"Now that we know it is possible to grow a Tiny Forest in the middle of the desert, how can <strong>you and I</strong> co-create a living legacy by honoring nature alongside our shared digital connection?"</p>
                <p>It’s a living story, an epic poem, and a real desert sanctuary—powered by regenerative design and collective imagination. This is not just another project: it’s a place where art, ecology, and community converge.</p>
                <p className="">You believed in every seed I ever planted.</p>
                <p>From the Starry Night Skoolie, to For Every Star A Tree, and even Typewriter Poetry, you've been there throughout the years&mdash;and I'm beyond grateful for your presence.</p>
                <p>Now, I'd like to invite you into something out of the ordinary:</p>
                <p>The AI Forest.</p>
            </div>
            <div>
                *Image: Photos of your desert land. Sketches from your journals. Past project milestones.**
            </div>
            <div className="space-y-6 text-lg">
                <p>Why it matters

Why they’ll love it</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button
                size="lg"
                variant="ghost"
                className="text-muted-foreground underline hover:bg-transparent hover:font-semibold"
                >
                Read the Personal Letter
                </Button>
                <Button
                size="lg"
                className="rounded-full font-semibold"
                >
                Be Part of The AI Forest
                </Button>
            </div>
        </section>

        {/* IMPACT & VISION */}
        <section className="w-full max-w-3xl mx-auto text-center py-16 flex flex-col gap-6 text-muted-foreground">
          <h4 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Impact &amp; Vision
          </h4>
            <div className="space-y-6 text-lg">
                <p>Outcomes you'll achieve together</p>
                <p>Together, We Will:

🌱 Restore 12,000 square feet of desert with native plants
🌎 Create a digital sanctuary to ease eco-anxiety
🦋 Attract pollinators, birds, and small wildlife
✨ Inspire thousands of visitors to reconnect with nature</p>
                <ul className="text-muted-foreground space-y-2">
                    <li>🌱 Restore 12,000 sq ft of desert habitat</li>
                    <li>🦋 Support native pollinators and small wildlife</li>
                    <li>✨ Inspire thousands to reconnect with nature</li>
                    <li>🌎 Create a living digital sanctuary to ease eco-anxiety</li>
                </ul>
            </div>
            <div>
                *Image: Photos of your desert land. Sketches from your journals. Past project milestones.**
            </div>
            <div className="space-y-6 text-lg">
                <p>How their participation regenerates the land and spirit</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button
                size="lg"
                variant="ghost"
                className="text-muted-foreground underline hover:bg-transparent hover:font-semibold"
                >
                Read the Personal Letter
                </Button>
                <Button
                size="lg"
                className="rounded-full font-semibold"
                >
                Be Part of The AI Forest
                </Button>
            </div>
        </section>

        {/* CREATIVE PROCESS & TIMELINE */}
        <section className="w-full max-w-3xl mx-auto text-center py-16 flex flex-col gap-6 text-muted-foreground">
          <h5 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Timeline
          </h5>
            <div className="space-y-6 text-lg">
                <p>Timline</p>
            </div>
            <div>
                *Image: Photos of your desert land. Sketches from your journals. Past project milestones.**
            </div>
            <div className="space-y-6 text-lg">
                <p>TBD</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button
                size="lg"
                variant="ghost"
                className="text-muted-foreground underline hover:bg-transparent hover:font-semibold"
                >
                Read the Personal Letter
                </Button>
                <Button
                size="lg"
                className="rounded-full font-semibold"
                >
                Be Part of The AI Forest
                </Button>
            </div>
        </section>

        {/* RISKS & CHALLENGES */}
        <section className="w-full max-w-3xl mx-auto text-center py-16 flex flex-col gap-6 text-muted-foreground">
          <h6 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Risks &amp; Challenges
          </h6>
            <div className="space-y-6 text-lg">
                <p>TBD.</p>
            </div>
            <div>
                *Image: Photos of your desert land. Sketches from your journals. Past project milestones.**
            </div>
            <div className="space-y-6 text-lg">
                <p>TBD</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button
                size="lg"
                variant="ghost"
                className="text-muted-foreground underline hover:bg-transparent hover:font-semibold"
                >
                Read the Personal Letter
                </Button>
                <Button
                size="lg"
                className="rounded-full font-semibold"
                >
                Be Part of The AI Forest
                </Button>
            </div>
        </section>

        {/* PAST CONTRIBUTIONS */}
        <p>Acknowledge their past contributions explicitly</p>

        {/* PARTICIPATION */}
        <section className="w-full max-w-3xl mx-auto text-center py-16 flex flex-col gap-6 text-muted-foreground">
          <p className="text-3xl md:text-4xl font-bold tracking-tight text-primary">How You Can Participate
          </p>
            <div className="space-y-6 text-lg">
                <p>Simple, clear options</p>
                <p>Emphasize belonging</p>
                <p>Show respect for all levels of support</p>
            </div>
            <div>
                *Image: Photos of your desert land. Sketches from your journals. Past project milestones.**
            </div>
            <div className="space-y-6 text-lg">
                <p>Ways to Be Part of The AI Forest:

1️⃣ Sign up for early access to the story experience
2️⃣ Support the project financially—every dollar helps us plant, restore, and build
3️⃣ Spread the word to friends and fellow dreamers

No matter how you choose to join, you are already part of this story.</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button
                size="lg"
                variant="ghost"
                className="text-muted-foreground underline hover:bg-transparent hover:font-semibold"
                >
                Read the Personal Letter
                </Button>
                <Button
                size="lg"
                className="rounded-full font-semibold"
                >
                Be Part of The AI Forest
                </Button>
            </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="w-full max-w-3xl mx-auto text-center py-16 flex flex-col gap-6 text-muted-foreground">
          <p className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Testimonials
          </p>
            <div className="space-y-6 text-lg">
                <p>Quotes from existing supporters</p>
                <p>Photos if you have them</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
                <Card>
                    <CardContent className="py-8 space-y-6">
                        <p>“Supporting your projects always feels like planting seeds for something bigger. I can’t wait to see The AI Forest grow.”</p>
                        <p>– Sarah L., longtime supporter</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="py-8 space-y-6">
                        <p>“Supporting your projects always feels like planting seeds for something bigger. I can’t wait to see The AI Forest grow.”</p>
                        <p>– Sarah L., longtime supporter</p>
                    </CardContent>
                </Card>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button
                size="lg"
                variant="ghost"
                className="text-muted-foreground underline hover:bg-transparent hover:font-semibold"
                >
                Read the Personal Letter
                </Button>
                <Button
                size="lg"
                className="rounded-full font-semibold"
                >
                Be Part of The AI Forest
                </Button>
            </div>
        </section>

        {/* GRATITUDE */}
        <section className="w-full max-w-2xl mx-auto prose prose-neutral">
          <Card>
            <CardContent className="py-8 space-y-6">
              <p>
                Dear Friends,
              </p>
              <p>
                Over the years, your support has turned ideas into living ecosystems. From the Starry Night Skoolie to For Every Star A Tree, you've shown up time and again with open hearts and open hands.
              </p>
              <p>
                The AI Forest is a project that blends everything we care about: regenerative desert ecology, poetic storytelling, and a shared dream of a better world. I would be honored if you joined me in bringing it to life.
              </p>
              <p>
                Thank you for believing in the impossible.
              </p>
              <p>
                With love,<br />
                [Your Name]
              </p>
            </CardContent>
          </Card>
        </section>

        {/* WAYS TO PARTICIPATE */}
        <section className="w-full max-w-3xl mx-auto text-center flex flex-col gap-6 py-12">
          <p className="text-2xl font-semibold">
          Ready to Join This New Chapter?
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg">Be Part of The AI Forest</Button>
          </div>
        </section>

        {/* WAITLIST SIGNUP */}
        <section className="w-full max-w-3xl mx-auto">
          <WaitlistCard />
        </section>

      </main>

      <Footer />
    </div>
  );
}
