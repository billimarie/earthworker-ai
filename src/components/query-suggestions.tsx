import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface QuerySuggestionsProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

export default function QuerySuggestions({
  suggestions,
  onSuggestionClick,
}: QuerySuggestionsProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Sparkles className="h-4 w-4" />
        <span>Try one of these suggestions:</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => onSuggestionClick(suggestion)}
            className="bg-background hover:bg-muted"
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  );
}