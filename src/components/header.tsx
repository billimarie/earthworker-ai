import { Leaf } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-3 border-b px-4 md:px-8 py-4">
      <div className="flex items-center gap-3">
        <Leaf className="h-7 w-7 text-primary" />
        <h1 className="text-lg font-medium tracking-loose text-foreground text-transparent bg-clip-text bg-gradient-to-tl from-violet-950 via-indigo-900 to-blue-900">
          the ai forest
        </h1>
      </div>
    </header>
  );
}
