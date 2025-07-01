import { config } from 'dotenv';
config();

import '@/ai/flows/generate-response.ts';
import '@/ai/flows/optimize-query.ts';
import '@/ai/flows/suggest-query.ts';