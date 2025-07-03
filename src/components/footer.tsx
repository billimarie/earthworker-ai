import { LayoutDashboard, BarChart3, CirclePlus, User } from "lucide-react";

export default function Footer() {

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-background/90 border-t border-border/50 shadow-t-lg z-50 backdrop-blur-sm">
            <nav className="flex justify-around items-center h-full px-2">
                <a className="flex-1 text-center" href="/?tab=dashboard">
                    <div className="flex flex-col items-center justify-center gap-1 w-full h-full p-2 rounded-lg transition-colors text-muted-foreground hover:text-primary">
                        <LayoutDashboard className="h-6 w-6" />
                        <span className="text-xs">Universe</span>
                    </div>
                </a>
                <a className="flex-1 text-center" href="/?tab=community">
                    <div className="flex flex-col items-center justify-center gap-1 w-full h-full p-2 rounded-lg transition-colors text-muted-foreground hover:text-primary">
                        <BarChart3 className="h-6 w-6" />
                        <span className="text-xs">Data</span>
                    </div>
                </a>
                <button className="flex-1 text-center bg-transparent border-none p-0 h-full">
                    <div className="flex flex-col items-center justify-center gap-1 w-full h-full p-2 rounded-lg transition-colors text-muted-foreground hover:text-primary">
                        <CirclePlus className="h-6 w-6" />
                        <span className="text-xs">Claim</span>
                    </div>
                </button>
                <a className="flex-1 text-center" href="/profile/qlTSE3cceMhO0By47HcDYB35Kmw2">
                    <div className="flex flex-col items-center justify-center gap-1 w-full h-full p-2 rounded-lg transition-colors text-muted-foreground hover:text-primary">
                        <User className="h-6 w-6" />
                        <span className="text-xs">Profile</span>
                    </div>
                </a>
            </nav>
        </div>
    );
}
