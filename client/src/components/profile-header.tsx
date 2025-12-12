import { useConfig } from "@/lib/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle } from "lucide-react";

export function ProfileHeader() {
  const { config } = useConfig();
  
  const whatsappLink = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(config.whatsappMessage)}`;

  return (
    <div className="flex flex-col items-center text-center space-y-4 mb-8">
      <div className="relative overflow-visible">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/20 to-secondary opacity-70 blur-sm animate-pulse" />
        <Avatar className="w-24 h-24 border-2 border-white shadow-lg relative overflow-hidden">
          <AvatarImage 
            src={config.profileImage} 
            alt={config.profileName} 
            className="object-cover transition-transform" 
            style={{ transform: `scale(${config.profileImageScale / 100})` }}
          />
          <AvatarFallback>{config.profileName.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>
      
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">{config.profileName}</h1>
        <p className="text-sm text-muted-foreground font-medium max-w-[280px] mx-auto leading-relaxed whitespace-pre-line">
          {config.profileBio}
        </p>
      </div>

      <div className="pt-2">
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 hover:bg-green-100 transition-colors duration-300 shadow-sm border border-green-200"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-xs font-bold">Tem dúvidas? Me chama no whats</span>
        </a>
      </div>
    </div>
  );
}
