import { Leaf } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center gap-3 border-b px-4 md:px-8 py-4">
      <Leaf className="h-7 w-7 text-primary" />
      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        Earthcare AI
      </h1>
    </header>
  );
}