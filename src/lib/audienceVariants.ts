// lib/audienceVariants.ts

export interface AudienceVariant {
    name: string;
    primaryGradient: string; // Tailwind gradient classes
    accentColor: string;     // Tailwind text/border color
    icon: string;            // e.g., lucide icon name or emoji
    description: string;
  }
  
  export const audienceVariants: Record<string, AudienceVariant> = {
    default: {
      primaryGradient: "from-fuchsia-600 to-pink-500",
      accentColor: "text-emerald-400",
    },
    web3: {
      name: "Web3 Crowd",
      primaryGradient: "from-fuchsia-600 to-pink-500",
      accentColor: "text-emerald-400",
      icon: "🦋",
      description: "Futuristic ownership and regenerative finance.",
    },
    philanthropists: {
      name: "Philanthropists",
      primaryGradient: "from-emerald-700 to-emerald-800",
      accentColor: "text-amber-300",
      icon: "🌳",
      description: "Legacy, positive impact, long-term vision.",
    },
    art: {
      name: "Art Institutions",
      primaryGradient: "from-indigo-900 to-indigo-800",
      accentColor: "text-rose-400",
      icon: "🪨",
      description: "Cultural depth and contemplative innovation.",
    },
    citizen: {
      name: "Citizen Scientists",
      primaryGradient: "from-sky-600 to-sky-700",
      accentColor: "text-lime-400",
      icon: "🔍",
      description: "Open data and participatory discovery.",
    },
    ai: {
      name: "AI Enthusiasts",
      primaryGradient: "from-cyan-500 to-cyan-600",
      accentColor: "text-violet-500",
      icon: "🧠",
      description: "Machine learning creativity.",
    },
    nature: {
      name: "Nature Lovers",
      primaryGradient: "from-green-700 to-green-800",
      accentColor: "text-yellow-400",
      icon: "🌱",
      description: "Healing and restoration.",
    },
    local: {
      name: "Local Visitors",
      primaryGradient: "from-amber-500 to-amber-600",
      accentColor: "text-sky-300",
      icon: "🏜️",
      description: "Warm community and exploration.",
    },
    global: {
      name: "International Climate Networks",
      primaryGradient: "from-teal-700 to-teal-800",
      accentColor: "text-blue-400",
      icon: "🌍",
      description: "Global regeneration partnerships.",
    },
    educators: {
      name: "Educators & Schools",
      primaryGradient: "from-yellow-500 to-yellow-600",
      accentColor: "text-green-400",
      icon: "📖",
      description: "Learning and inspiration.",
    },
    journalists: {
      name: "Journalists & Media",
      primaryGradient: "from-red-600 to-red-700",
      accentColor: "text-neutral-200",
      icon: "📰",
      description: "Storytelling and impact.",
    },
    social: {
      name: "Social Media Masses",
      primaryGradient: "from-pink-500 to-pink-600",
      accentColor: "text-blue-400",
      icon: "🦋",
      description: "Viral inspiration and belonging.",
    },
  };
  