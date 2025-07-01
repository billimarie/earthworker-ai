"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { LoaderCircle, Send } from "lucide-react";

import { handleQuery, type ChatMessage as Message } from "./actions";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import CarbonTracker from "@/components/carbon-tracker";
import AdsenseBanner from "@/components/adsense-banner";
import ChatMessage from "@/components/chat-message";
import QuerySuggestions from "@/components/query-suggestions";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { toast } = useToast();

  const scrollAreaRef = useRef<HTMLDivElement>(null);

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
      <main className="flex-1 flex flex-col md:flex-row gap-8 p-4 md:p-8">
        <div className="flex-1 flex flex-col gap-6">
          <Card className="flex-1 flex flex-col">
            <CardContent className="flex-1 flex flex-col p-4 md:p-6">
              <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
                <div className="space-y-6">
                  {messages.length === 0 && (
                    <ChatMessage
                      role="assistant"
                      content="Hello! How can I help you today? Ask me anything."
                    />
                  )}
                  {messages.map((msg, index) => (
                    <ChatMessage key={index} {...msg} />
                  ))}
                  {suggestions.length > 0 && (
                    <QuerySuggestions
                      suggestions={suggestions}
                      onSuggestionClick={handleSuggestionClick}
                    />
                  )}
                </div>
              </ScrollArea>
              <form
                onSubmit={handleSubmit}
                className="mt-6 flex items-start gap-4 border-t pt-6"
              >
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question about sustainability or anything else..."
                  className="flex-1 resize-none"
                  rows={2}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading || !input.trim()}
                  aria-label="Send message"
                >
                  {isLoading ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    <Send />
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <aside className="w-full md:w-80 lg:w-96 flex flex-col gap-8">
          <CarbonTracker />
          <AdsenseBanner />
        </aside>
      </main>
    </div>
  );
}