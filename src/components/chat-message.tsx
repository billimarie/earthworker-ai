import { AlertTriangle, Bot, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface ChatMessageProps {
  role: "user" | "assistant" | "system";
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user";
  const isSystem = role === "system";

  const Icon = isUser ? User : isSystem ? AlertTriangle : Bot;
  const avatarBg = isUser
    ? "bg-primary/20"
    : isSystem
    ? "bg-destructive/20"
    : "bg-secondary";
  const avatarText = isUser
    ? "text-primary"
    : isSystem
    ? "text-destructive"
    : "text-secondary-foreground";
  const messageBg = isUser
    ? "bg-primary/10 text-primary-foreground"
    : isSystem
    ? "bg-destructive/10 text-destructive-foreground"
    : "bg-secondary";
  const messageAlignment = isUser ? "items-end" : "items-start";
  const messageFlexDirection = isUser ? "flex-row-reverse" : "flex-row";

  return (
      <div className={cn("flex gap-3", messageFlexDirection, messageAlignment)}>
        <Avatar>
          <AvatarFallback className={cn(avatarBg, avatarText)}>
            <Icon className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
        <div
          className={cn(
            "max-w-[75%] rounded-lg p-3 whitespace-pre-wrap",
            messageBg
          )}
        >
          <p className="text-sm leading-relaxed">{content}</p>
        </div>
      </div>
  );
}