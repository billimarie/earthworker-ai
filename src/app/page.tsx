"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { LoaderCircle, Send, Trees } from "lucide-react";

import {
  handleQuery,
  fetchImpactData,
  type ChatMessage as Message,
} from "./actions";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import CarbonTracker from "@/components/carbon-tracker";
import AdsenseBanner from "@/components/adsense-banner";
import ChatMessage from "@/components/chat-message";
import QuerySuggestions from "@/components/query-suggestions";
import { useToast } from "@/hooks/use-toast";
import type { ImpactData } from "@/services/impact-service";
import WaitlistCard from "@/components/waitlist-card";
import ChrysalisCoinsDisplay from "@/components/chrysalis-coins-display";
import { useSearchParams } from "next/navigation";
import { audienceVariants } from "@/lib/audienceVariants";

import VanillaTilt from 'vanilla-tilt';
import { cn } from '@/lib/utils';
import type { TiltOptions } from 'vanilla-tilt';

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [impactData, setImpactData] = useState<ImpactData | null>(null);
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const audience = searchParams.get("audience") || "default";
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadImpactData = async () => {
      const data = await fetchImpactData();
      setImpactData(data);
    };
    loadImpactData();
  }, []);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const processQuery = async (query: string) => {
    if (!query.trim()) return;

    setIsLoading(true);
    setSuggestions([]);
    setMessages((prev) => [...prev, { role: "user", content: query }]);

    try {
      const result = await handleQuery(query);

      if (result.type === "suggestions") {
        setSuggestions(result.data as string[]);
        setMessages((prev) => [
          ...prev,
          {
            role: "system",
            content:
              "Your query seems a bit ambiguous. Here are some suggestions to clarify it:",
          },
        ]);
      } else if (result.type === "response") {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: result.data as string },
        ]);
        // Refetch impact data after a successful query
        const data = await fetchImpactData();
        setImpactData(data);
      } else if (result.type === "error") {
        setMessages((prev) => [
          ...prev,
          { role: "system", content: result.data as string },
        ]);
        toast({
          variant: "destructive",
          title: "An error occurred",
          description: result.data as string,
        });
      }
    } catch (e) {
      const errorMessage =
        e instanceof Error ? e.message : "An unexpected error occurred.";
      setMessages((prev) => [
        ...prev,
        { role: "system", content: errorMessage },
      ]);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await processQuery(input);
    setInput("");
  };

  const handleSuggestionClick = async (suggestion: string) => {
    setInput(suggestion);
    await processQuery(suggestion);
    setInput("");
  };

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
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1 flex flex-col gap-8 px-4 px-8 mb-20">
        
        <div className="h-screen w-full flex flex-col gap-6 px-4 md:px-8 justify-center mx-auto text-center">

          <div className="flex justify-center scale-75 active:translate-y-1 active:scale-50 transform transition-transform duration-150 ease-out">
            <div
              ref={tiltRef}
              className={cn(
                "glass relative block w-full max-w-[320px] aspect-square rounded-full overflow-hidden bg-cover bg-center",
                // Default shadows and transforms
                "shadow-[0_0_0_2px_rgba(255,214,102,0.4),0_0_3px_3px_rgba(255,214,102,0.2)]",
                "transform transition-transform duration-150 ease-out",
                // Hover lifts up
                "hover:-translate-y-1 hover:shadow-[0_0_0_3px_rgba(255,214,102,0.6),0_0_10px_12px_rgba(255,214,102,0.25)]",
                "active:transform active:transition-transform active:duration-150 active:ease-in-out active:opacity-80"
                )}
              style={{ marginTop:"-150px" }}
              >
      
              <div className="transform transition-transform duration-150 ease-out absolute inset-[20px] rounded-full pointer-events-none z-10 shadow-[inset_0.5px_0.5px_1.5px_rgba(255,235,180,0.6),_inset_-1px_-1px_1px_rgba(160,110,0,0.5),_inset_3px_3px_6px_rgba(0,0,0,0.25)] border border-orange-300/20"></div>
    
              <div className="z-90 inner-glass absolute top-0 bottom-0 right-0 left-0 inset-[20px] rounded-full overflow-hidden flex flex-col justify-center items-center p-6 text-center w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-700/90 via-yellow-500/80 to-amber-800 pointer-events-none z-10 rounded-full"></div>

                  <div className="relative z-20 text-slate-50 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                    <Trees className="w-40 h-40 text-amber-700/90 stroke-1 text-center mx-auto" />
                  </div>
              </div>
          </div>
        </div>

        <Hero audience={audience} />

        <div className="pt-6 flex flex-col md:flex-row justify-center space-x-6">
          <Button
            variant="ghost"
            size="lg"
            aria-label="Read the Black Paper"
            className="text-gray-500 hover:bg-transparent hover:underline"
          >Read the Black Paper</Button>
          <Button
            type="submit"
            size="lg"
            aria-label="Join the Waitlist"
            className="rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 hover:text-amber-900 font-bold transition-all duration-300 ease-in-out border-none shadow-[inset_2px_2px_4px_rgba(160,110,0,0.6),inset_-2px_-2px_4px_rgba(255,245,200,0.5),0_1px_2px_rgba(0,0,0,0.1)] hover:bg-gradient-to-br hover:from-yellow-200 hover:to-yellow-400 hover:shadow-[inset_2px_2px_5px_rgba(160,110,0,0.5),inset_-2px_-2px_5px_rgba(255,245,200,0.6),0_2px_4px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:bg-gradient-to-br active:from-yellow-400 active:to-yellow-600 active:shadow-[inset_-2px_-2px_4px_rgba(160,110,0,0.6),inset_2px_2px_4px_rgba(255,245,200,0.5)] active:translate-y-0 backdrop-blur-3xl shadow-2xl"
          >Join the Waitlist</Button>
        </div>
      </div>

      <aside className="flex flex-col sm:flex-row flex-wrap mx-auto w-full justify-center gap-6">
        <CarbonTracker impactData={impactData} />
        <AdsenseBanner />
      </aside>

        <footer className="mx-auto max-w-1/3">
          <WaitlistCard />
        </footer>

      </main>

    </div>
  );
}
