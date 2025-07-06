
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image?: string;
  details?: string;
  tech?: string[];
  category?: string;
  audio?: string;
  link?: string;
  onPlayMusic?: () => void;
}

const DetailModal = ({
  isOpen,
  onClose,
  title,
  description,
  image,
  details,
  tech,
  category,
  audio,
  link,
  onPlayMusic
}: DetailModalProps) => {
  const handleLinkClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold pr-8">
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {image && (
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
              />
              {category === 'music' && audio && onPlayMusic && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity">
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={onPlayMusic}
                    className="rounded-full"
                  >
                    <Play className="h-6 w-6 ml-1" />
                  </Button>
                </div>
              )}
            </div>
          )}
          
          <div className="space-y-4">
            <DialogDescription className="text-base leading-relaxed whitespace-pre-wrap">
              {description}
            </DialogDescription>
            
            {details && (
              <div className="pt-2 border-t">
                <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                  Additional Details
                </h4>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {details}
                </p>
              </div>
            )}
            
            {tech && tech.length > 0 && (
              <div className="pt-2 border-t">
                <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span 
                      key={t} 
                      className="bg-accent text-accent-foreground py-1 px-3 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="pt-2 border-t flex flex-col sm:flex-row gap-2">
              {category === 'music' && audio && onPlayMusic && (
                <Button
                  variant="outline"
                  onClick={onPlayMusic}
                  className="flex-1"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Play Music
                </Button>
              )}
              
              {link && (
                <Button
                  onClick={handleLinkClick}
                  className="flex-1"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Project
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailModal;
