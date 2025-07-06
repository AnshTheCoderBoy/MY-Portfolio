
import { useState } from 'react';
import { usePortfolioData } from '@/hooks/usePortfolioData';
import DetailModal from './DetailModal';
import { ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const data = usePortfolioData();
  const [detailModal, setDetailModal] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    image: string;
    tech: string[];
    link: string;
  }>({
    isOpen: false,
    title: '',
    description: '',
    image: '',
    tech: [],
    link: ''
  });

  const handleCardClick = (project: any) => {
    setDetailModal({
      isOpen: true,
      title: project.title,
      description: project.description,
      image: project.img,
      tech: project.tech,
      link: project.link
    });
  };

  const closeDetailModal = () => {
    setDetailModal({
      isOpen: false,
      title: '',
      description: '',
      image: '',
      tech: [],
      link: ''
    });
  };
  
  return (
    <>
      <div id="projects">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center sm:text-left">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {data.projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => handleCardClick(project)}
              className="group bg-card rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none animate-fade-in cursor-pointer border border-border/50 hover:border-primary/50 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              <div className="relative overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-36 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="h-4 w-4 text-primary" />
                </div>
              </div>
              
              <div className="relative p-4 sm:p-5">
                <div className="flex items-start gap-2 mb-2">
                  <Code2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                  {project.tech.slice(0, 3).map((t) => (
                    <span 
                      key={t} 
                      className="bg-primary/10 text-primary py-1 px-2 rounded-full text-xs sm:text-sm font-medium border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="bg-muted text-muted-foreground py-1 px-2 rounded-full text-xs sm:text-sm">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="text-xs text-primary/80 font-medium group-hover:text-primary transition-colors flex items-center gap-1">
                  <span>Click to read more</span>
                  <div className="w-4 h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DetailModal
        isOpen={detailModal.isOpen}
        onClose={closeDetailModal}
        title={detailModal.title}
        description={detailModal.description}
        image={detailModal.image}
        tech={detailModal.tech}
        link={detailModal.link}
      />
    </>
  );
};

export default Projects;
