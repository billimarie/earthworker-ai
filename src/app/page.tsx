"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { LoaderCircle, Send } from "lucide-react";

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
import Footer from "@/components/footer";
import CarbonTracker from "@/components/carbon-tracker";
import AdsenseBanner from "@/components/adsense-banner";
import ChatMessage from "@/components/chat-message";
import QuerySuggestions from "@/components/query-suggestions";
import { useToast } from "@/hooks/use-toast";
import type { ImpactData } from "@/services/impact-service";
import WaitlistCard from "@/components/waitlist-card";
import ChrysalisCoinsDisplay from "@/components/chrysalis-coins-display";

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [impactData, setImpactData] = useState<ImpactData | null>(null);
  const { toast } = useToast();

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

  return (
    <div className="flex flex-col min-h-screen">
      
      <Header />
      
      <main className="flex-1 flex flex-col gap-8 px-4 px-8 mb-20">
        
        <div className="h-screen w-full flex flex-col gap-6 px-4 md:px-8 justify-center mx-auto text-center">

          <div className="active:translate-y-1 active:scale-95 transform transition-transform duration-150 ease-out"><ChrysalisCoinsDisplay /></div>

          <h2 className="text-2xl md:text-3xl font-emibold tracking-tight text-primary text-gray-600">Introducing the world's first artificially intelligent micro forest: backed by solar power, guided by neural networks, and built on living data.</h2>

          <div className="pt-6 flex flex-row justify-center space-x-6">
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
              className="rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 text-amber-800 hover:text-amber-900 font-bold transition-all duration-300 ease-in-out border-none shadow-[inset_2px_2px_4px_rgba(160,110,0,0.6),inset_-2px_-2px_4px_rgba(255,245,200,0.5),0_1px_2px_rgba(0,0,0,0.1)] hover:bg-gradient-to-br hover:from-yellow-200 hover:to-yellow-400 hover:shadow-[inset_2px_2px_5px_rgba(160,110,0,0.5),inset_-2px_-2px_5px_rgba(255,245,200,0.6),0_2px_4px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:bg-gradient-to-br active:from-yellow-400 active:to-yellow-600 active:shadow-[inset_-2px_-2px_4px_rgba(160,110,0,0.6),inset_2px_2px_4px_rgba(255,245,200,0.5)] active:translate-y-0 backdrop-blur-3xl shadow-2xl"
            >Join the Waitlist</Button>
          </div>
        </div>

        <aside className="flex flex-col sm:flex-row gap-8 flex-wrap mx-auto w-full justify-center">
          <CarbonTracker impactData={impactData} className="flex-1 flex flex-col gap-6 justify-center items-center p-4 glass-card bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-blue-600/20 backdrop-blur-3xl shadow-2xl rounded-3xl p-6 overflow-hidden border border-white/10" />
          <AdsenseBanner />
        </aside>

        <footer className="mx-auto max-w-1/3">
          <WaitlistCard />
        </footer>

      </main>

      <Footer />

    </div>
  );
}
