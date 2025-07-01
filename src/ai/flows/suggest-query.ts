// This file uses server-side code.
'use server';

/**
 * @fileOverview An AI flow to suggest related questions to help users explore a topic and increase ad revenue.
 *
 * - suggestQuery - A function that processes user queries and suggests related questions.
 * - SuggestQueryInput - The input type for the suggestQuery function.
 * - SuggestQueryOutput - The return type for the suggestQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestQueryInputSchema = z.object({
  query: z.string().describe('The user query to be processed.'),
});
export type SuggestQueryInput = z.infer<typeof SuggestQueryInputSchema>;

const SuggestQueryOutputSchema = z.object({
  suggestions: z.array(
    z.string().describe('Suggested related questions to help explore the topic.')
  ).optional(),
});
export type SuggestQueryOutput = z.infer<typeof SuggestQueryOutputSchema>;

export async function suggestQuery(input: SuggestQueryInput): Promise<SuggestQueryOutput> {
  return suggestQueryFlow(input);
}

const suggestQueryPrompt = ai.definePrompt({
  name: 'suggestQueryPrompt',
  input: {schema: SuggestQueryInputSchema},
  output: {schema: SuggestQueryOutputSchema},
  prompt: `You are an AI assistant designed to suggest related questions to help users explore a topic.

  Based on the following query, provide a list of suggested related questions to help the user explore the topic.

  Query: {{{query}}}

  Respond in a JSON format:
  {
    "suggestions": ["suggestion 1", "suggestion 2", ...]
  }`,
});

const suggestQueryFlow = ai.defineFlow(
  {
    name: 'suggestQueryFlow',
    inputSchema: SuggestQueryInputSchema,
    outputSchema: SuggestQueryOutputSchema,
  },
  async input => {
    const {output} = await suggestQueryPrompt(input);
    return output!;
  }
);
