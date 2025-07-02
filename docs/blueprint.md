# **App Name**: Earthworker AI

## Core Features:

- Intuitive UI: Clean and simple user interface for interacting with the AI.
- AI Query Processing: Generate responses to user queries using the Gemini API.
- Adsense Integration: Display ads using Google AdSense.
- Carbon Offset Tracking: Track and display estimated carbon offset contributions to ForEveryStarATree.org.
- Query Optimization Tool: The AI acts as a tool to detect semantically-ambiguous queries from the user. These queries receive special handling, to maximize quality and advertising revenue.

## Style Guidelines:

- Primary color: Forest green (#386641) to evoke nature and sustainability.
- Background color: Very light green (#F0F5F1), almost white.
- Accent color: Earthy brown (#A68A64) to complement the green and suggest organic elements.
- Body and headline font: 'Inter', a sans-serif font for modern, clean readability.
- Use minimalistic, line-based icons to represent features and actions.
- Maintain a clean, uncluttered layout with ample whitespace.
- Use subtle transitions and animations to provide visual feedback.

## Regenerative AI Query Impact Model 

### Variables
- Q = Number of queries a user makes
- R = Revenue per query (Example: $0.0015)
- Csqft = Cost to regenerate 1 sq ft (Example: $0.10)
- COsqft = Carbon offset per sq ft regenerated per year (Example: 500 g CO₂)
- WSsqft = Water saved per sq ft regenerated per year (Example: 100 liters)
- CEGemini = Carbon emissions per Gemini query (Example: 1.6 g CO₂)
- WCGemini = Water consumption per Gemini query (Example: 0.025 liters)

### Core Calculations
 1. Total Revenue Generated
TotalRevenue = Q × R

2. Total Square Footage Regenerated
SqFtRegenerated = TotalRevenue / Csqft = Q × R / Csqft

3. Carbon Offset (Gross)
TotalCOOffset = SqFtRegenerated × COsqft

4. Water Saved (Gross)
TotalWSSaved = SqFtRegenerated × WSsqft

5. Emissions & Consumption from AI Use
TotalCEQueries = Q × CEGGemini
TotalWCQueries = Q × WCGemini

### Net Impact for Users

Net Carbon Saved:

- NetCarbon = TotalCOOffset − TotalCEQueries

Net Water Saved:
- NetWater = TotalWSSaved − TotalWCQueries

### Example (if Q = 100 Queries)

- Q = 100
- Revenue per Query: $0.0015
- Cost per Sq Ft: $0.10
- CO₂ per Sq Ft: 500 g
- Water per Sq Ft: 100 L
- Gemini CO₂: 1.6 g/query
- Gemini Water: 0.025 L/query

1. Revenue
100 × $0.0015 = $0.15

2. Sq Ft Regenerated
$0.15 ÷ $0.10 = 1.5 sq ft

3. Carbon Offset
1.5 × 500 = 750 g CO₂

4. Water Saved
1.5 × 100 = 150 liters

5. AI Emissions
100 × 1.6 = 160 g CO₂
100 × 0.025 = 2.5 liters

6. Net Carbon
750 −160 = 590 g CO₂ saved

7. Net Water
150 − 2.5 = 147.5 liters saved

#### Result

🌱 You helped regenerate 1.5 square feet of desertified land.

🌍 Net carbon saved: 590 grams CO₂.

💧 Net water retained: 147.5 liters.

### How to Adapt

- Plug in real costs as they are refined.
- Use a CO₂ lookup table for plant types (e.g., native milkweed vs. mesquite).
- Dynamically update your impact page as values improve.

### Increase Transparency
- Real-time counters for each user session.
- Community Impact Leaderboard (e.g., “Top 10 searchers this month saved X kg CO₂”).
- Offset Certificate PDF Generator (“You’ve helped regenerate 20 sq ft this year!”).
- Next Step: accurately determine values for **Csqft​, COsqft​, and WSsqft**​ based on our specific regenerative efforts. These will be the most impactful numbers for Users to see.