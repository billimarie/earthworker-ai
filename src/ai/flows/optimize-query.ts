// This file uses server-side code.
'use server';

/**
 * @fileOverview An AI flow to optimize user search queries by identifying potential ambiguity
 * and suggesting clarifying questions or alternative phrasings.
 *
 * - optimizeQuery - A function that processes user queries and suggests improvements.
 * - OptimizeQueryInput - The input type for the optimizeQuery function.
 * - OptimizeQueryOutput - The return type for the optimizeQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeQueryInputSchema = z.object({
  query: z.string().describe('The user search query to be optimized.'),
});
export type OptimizeQueryInput = z.infer<typeof OptimizeQueryInputSchema>;

const OptimizeQueryOutputSchema = z.object({
  isAmbiguous: z.boolean().describe('Whether the query is potentially ambiguous.'),
  suggestions: z.array(
    z.string().describe('Suggested clarifying questions or alternative phrasings.')
  ).optional(),
  rewrittenQuery: z.string().optional().describe('The rewritten query with improved clarity.')
});
export type OptimizeQueryOutput = z.infer<typeof OptimizeQueryOutputSchema>;

export async function optimizeQuery(input: OptimizeQueryInput): Promise<OptimizeQueryOutput> {
  return optimizeQueryFlow(input);
}

const optimizeQueryPrompt = ai.definePrompt({
  name: 'optimizeQueryPrompt',
  input: {schema: OptimizeQueryInputSchema},
  output: {schema: OptimizeQueryOutputSchema},
  prompt: `You are an AI assistant designed to analyze user search queries
for potential ambiguity and suggest improvements.

Determine if the following query is ambiguous. If it is, provide a list of
suggested clarifying questions or alternative phrasings to improve the
accuracy and relevance of the search results. If the query is ambiguous, rewrite the query to be more semantically clear.

Query: {{{query}}}

Respond in a JSON format:
{
  "isAmbiguous": true/false,
  "suggestions": ["suggestion 1", "suggestion 2", ...],
  "rewrittenQuery": "rewritten query"
}`,
});

const optimizeQueryFlow = ai.defineFlow(
  {
    name: 'optimizeQueryFlow',
    inputSchema: OptimizeQueryInputSchema,
    outputSchema: OptimizeQueryOutputSchema,
  },
  async input => {
    const {output} = await optimizeQueryPrompt(input);
    return output!;
  }
);
