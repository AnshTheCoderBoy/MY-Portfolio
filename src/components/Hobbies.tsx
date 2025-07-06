
import { useState } from "react";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import MusicPlayer from "./MusicPlayer";
import DetailModal from "./DetailModal";

const Hobbies = () => {
  const portfolioData = usePortfolioData();
  const [musicPlayer, setMusicPlayer] = useState<{
    isOpen: boolean;
    audioSrc: string;
    title: string;
    description: string;
    image: string;
  }>({
    isOpen: false,
    audioSrc: '',
    title: '',
    description: '',
    image: ''
  });

  const [detailModal, setDetailModal] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    image: string;
    details?: string;
    category: string;
    audio?: string;
  }>({
    isOpen: false,
    title: '',
    description: '',
    image: '',
    details: '',
    category: '',
    audio: ''
  });

  const categoryTitles = {
    gym: "Gym & Fitness",
    gaming: "Gaming",
    music: "Music",
    movies: "Movies"
  };

  const hasAnyHobbies = Object.values(portfolioData.hobbies).some(category => category.length > 0);

  const handlePlayMusic = (item: any) => {
    setMusicPlayer({
      isOpen: true,
      audioSrc: item.audio,
      title: item.title,
      description: item.description,
      image: item.image
    });
  };

  const closeMusicPlayer = () => {
    setMusicPlayer({
      isOpen: false,
      audioSrc: '',
      title: '',
      description: '',
      image: ''
    });
  };

  const handleCardClick = (item: any, category: string) => {
    setDetailModal({
      isOpen: true,
      title: item.title,
      description: item.description,
      image: item.image,
      details: item.details,
      category: category,
      audio: item.audio
    });
  };

  const closeDetailModal = () => {
    setDetailModal({
      isOpen: false,
      title: '',
      description: '',
      image: '',
      details: '',
      category: '',
      audio: ''
    });
  };

  const handlePlayMusicFromModal = () => {
    setMusicPlayer({
      isOpen: true,
      audioSrc: detailModal.audio || '',
      title: detailModal.title,
      description: detailModal.description,
      image: detailModal.image
    });
    closeDetailModal();
  };

  if (!hasAnyHobbies) {
    return null;
  }

  return (
    <>
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">My Hobbies</h2>
          
          <div className="space-y-8 sm:space-y-12">
            {(Object.keys(portfolioData.hobbies) as Array<keyof typeof portfolioData.hobbies>).map((category) => {
              const items = portfolioData.hobbies[category];
              
              if (items.length === 0) return null;
              
              return (
                <div key={category} className="space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-center capitalize">
                    {categoryTitles[category]}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {items.map((item, index) => (
                      <div 
                        key={index} 
                        className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                        onClick={() => handleCardClick(item, category)}
                      >
                        {item.image && (
                          <div className="aspect-video overflow-hidden relative">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                            {category === 'music' && (item as any).audio && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity">
                                <Button
                                  variant="secondary"
                                  size="lg"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handlePlayMusic(item);
                                  }}
                                  className="rounded-full"
                                >
                                  <Play className="h-5 w-5 sm:h-6 sm:w-6 ml-1" />
                                </Button>
                              </div>
                            )}
                          </div>
                        )}
                        
                        <div className="p-4 sm:p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg sm:text-xl font-semibold line-clamp-2 flex-1">
                              {item.title}
                            </h4>
                            {category === 'music' && (item as any).audio && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handlePlayMusic(item);
                                }}
                                className="ml-2 flex-shrink-0"
                              >
                                <Play className="h-3 w-3 sm:h-4 sm:w-4" />
                              </Button>
                            )}
                          </div>
                          <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 line-clamp-3">
                            {item.description}
                          </p>
                          
                          {item.details && (
                            <div className="text-xs sm:text-sm text-muted-foreground">
                              <p className="whitespace-pre-wrap line-clamp-4">{item.details}</p>
                            </div>
                          )}
                          
                          <div className="mt-4 text-xs text-primary/60">
                            Click to read more...
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <DetailModal
        isOpen={detailModal.isOpen}
        onClose={closeDetailModal}
        title={detailModal.title}
        description={detailModal.description}
        image={detailModal.image}
        details={detailModal.details}
        category={detailModal.category}
        audio={detailModal.audio}
        onPlayMusic={detailModal.audio ? handlePlayMusicFromModal : undefined}
      />

      <MusicPlayer
        isOpen={musicPlayer.isOpen}
        onClose={closeMusicPlayer}
        audioSrc={musicPlayer.audioSrc}
        title={musicPlayer.title}
        description={musicPlayer.description}
        image={musicPlayer.image}
      />
    </>
  );
};

export default Hobbies;
