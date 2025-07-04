export interface AudienceVariant {
  name: string;
  primaryGradient: string; // Tailwind gradient classes
  accentColor: string;     // Tailwind text/border color
  icon: string;            // e.g., lucide icon name or emoji
  description: string;
  heroHeadline: string;
}

export const audienceVariants: Record<string, AudienceVariant> = {
  default: {
    name: "Visitors",
    primaryGradient: "from-fuchsia-600 to-pink-500",
    accentColor: "text-emerald-400",
    icon: "🌿",
    description: "A welcoming invitation to explore and belong.",
    heroHeadline: "Step into the AI Forest — Where Imagination and Ecology Grow Together.",
  },
  trueFans: {
    name: "True Fans",
    primaryGradient: "from-purple-600 to-purple-700",
    accentColor: "text-purple-600",
    icon: "✨",
    description: "Loyal supporters and lifelong companions on this journey.",
    heroHeadline: "Because You've Believed in Every Seed — Now Witness the Forest in Full Bloom.",
  },
  indie: {
    name: "Indie Hackers",
    primaryGradient: "from-rose-600 to-pink-700",
    accentColor: "text-teal-400",
    icon: "🚀",
    description: "Bootstrapped innovation and ethical entrepreneurship.",
    heroHeadline: "Build Fast. Grow Sustainably. Leave a Legacy Beyond Profit.",
  },
  web3: {
    name: "Web3 Crowd",
    primaryGradient: "from-fuchsia-600 to-pink-500",
    accentColor: "text-emerald-400",
    icon: "🦋",
    description: "Futuristic ownership and regenerative finance.",
    heroHeadline: "Join the Regenerative Revolution — Where Blockchain Meets the Living Earth.",
  },
  philanthropists: {
    name: "Philanthropists",
    primaryGradient: "from-emerald-700 to-emerald-800",
    accentColor: "text-amber-300",
    icon: "🌳",
    description: "Legacy, positive impact, long-term vision.",
    heroHeadline: "Grow More Than Returns — Cultivate Real-World Regeneration and Digital Legacy.",
  },
  art: {
    name: "Art Institutions",
    primaryGradient: "from-indigo-900 to-indigo-800",
    accentColor: "text-rose-400",
    icon: "🪨",
    description: "Cultural depth and contemplative innovation.",
    heroHeadline: "Where Your Voice Joins a Thousand Others — Co-Create a Living Work of Art.",
  },
  citizen: {
    name: "Citizen Scientists",
    primaryGradient: "from-sky-600 to-sky-700",
    accentColor: "text-lime-400",
    icon: "🔍",
    description: "Open data and participatory discovery.",
    heroHeadline: "Explore, Measure, Discover — Help Us Grow a Transparent, Living Laboratory.",
  },
  ai: {
    name: "AI Enthusiasts",
    primaryGradient: "from-cyan-500 to-cyan-600",
    accentColor: "text-violet-500",
    icon: "🧠",
    description: "Machine learning creativity.",
    heroHeadline: "Introducing the world's first artificially intelligent micro forest: backed by solar power, guided by neural networks, and built on living data.",
  },
  nature: {
    name: "Nature Lovers",
    primaryGradient: "from-green-700 to-green-800",
    accentColor: "text-yellow-400",
    icon: "🌱",
    description: "Healing and restoration.",
    heroHeadline: "A Living Sanctuary — Reconnect, Restore, and Breathe with the Earth.",
  },
  local: {
    name: "Local Visitors",
    primaryGradient: "from-amber-500 to-amber-600",
    accentColor: "text-sky-300",
    icon: "🏜️",
    description: "Warm community and exploration.",
    heroHeadline: "Right in Your Backyard — Discover the Desert's Most Unexpected Oasis.",
  },
  global: {
    name: "International Climate Networks",
    primaryGradient: "from-teal-700 to-teal-800",
    accentColor: "text-blue-400",
    icon: "🌍",
    description: "Global regeneration partnerships.",
    heroHeadline: "Unite Across Borders — A Global Effort to Regenerate Our Planet.",
  },
  educators: {
    name: "Educators & Schools",
    primaryGradient: "from-yellow-500 to-yellow-600",
    accentColor: "text-green-400",
    icon: "📖",
    description: "Learning and inspiration.",
    heroHeadline: "Teach, Inspire, Transform — The AI Forest is Your Living Classroom.",
  },
  journalists: {
    name: "Journalists & Media",
    primaryGradient: "from-red-600 to-red-700",
    accentColor: "text-neutral-200",
    icon: "📰",
    description: "Storytelling and impact.",
    heroHeadline: "Unearth Stories That Matter — Report from the Heart of Regeneration.",
  },
  social: {
    name: "Social Media Masses",
    primaryGradient: "from-pink-500 to-pink-600",
    accentColor: "text-blue-400",
    icon: "🦋",
    description: "Viral inspiration and belonging.",
    heroHeadline: "Be Part of Something Beautiful — Share the Forest with the World.",
  },
};
