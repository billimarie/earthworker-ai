"use server";

import { generateResponse } from "@/ai/flows/generate-response";
import { optimizeQuery } from "@/ai/flows/optimize-query";
import { getImpactData, updateImpactData } from "@/services/impact-service";

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface ActionResponse {
  type: "response" | "suggestions" | "error";
  data: string | string[];
}

function calculateImpactForOneQuery() {
  const R = 0.0015;
  const Csqft = 0.1;
  const COsqft = 500;
  const WSsqft = 100;
  const CEGemini = 1.6;
  const WCGemini = 0.025;
  const Q = 1;

  const totalRevenue = Q * R;
  const sqFtRegenerated = totalRevenue / Csqft;
  const totalCOOffset = sqFtRegenerated * COsqft;
  const totalWSSaved = sqFtRegenerated * WSsqft;
  const totalCEQueries = Q * CEGemini;
  const totalWCQueries = Q * WCGemini;
  const netCarbon = totalCOOffset - totalCEQueries;
  const netWater = totalWSSaved - totalWCQueries;

  return { sqFtRegenerated, netCarbon, netWater };
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

    const impactIncrement = calculateImpactForOneQuery();
    await updateImpactData(impactIncrement);

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

export async function fetchImpactData() {
  return await getImpactData();
}
