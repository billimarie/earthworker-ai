"use server";

import { generateResponse } from "@/ai/flows/generate-response";
import { optimizeQuery } from "@/ai/flows/optimize-query";

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface ActionResponse {
  type: "response" | "suggestions" | "error";
  data: string | string[];
}

export async function handleQuery(query: string): Promise<ActionResponse> {
  try {
    const optimization = await optimizeQuery({ query });

    if (optimization.isAmbiguous && optimization.suggestions?.length) {
      return {
        type: "suggestions",
        data: optimization.suggestions,
      };
    }

    const response = await generateResponse({ query });

    return {
      type: "response",
      data: response.response,
    };
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unexpected error occurred.";
    return {
      type: "error",
      data: `Sorry, I encountered an error: ${errorMessage}`,
    };
  }
}