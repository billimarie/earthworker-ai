import { Leaf } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-3 border-b px-4 md:px-8 py-4">
      <div className="flex items-center gap-3">
        <Leaf className="h-7 w-7 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          The AI Forest
        </h1>
      </div>
      <ThemeToggle />
    </header>
  );
}
