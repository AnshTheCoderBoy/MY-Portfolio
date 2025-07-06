
import { usePortfolioData } from '@/hooks/usePortfolioData';

const Hero = () => {
  const data = usePortfolioData();
  
  return (
    <section className="w-full flex flex-col items-center justify-center mb-8 sm:mb-12 pt-8 sm:pt-14 pb-6 sm:pb-8 bg-card/70 px-4 sm:px-6" id="hero">
      <div className="profile-photo-container relative mb-4 sm:mb-6">
        <img
          src="/lovable-uploads/f86cb883-5b89-40fa-b042-f487aa7e39ca.png"
          alt={data.name}
          className="profile-photo w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full object-cover border-2 sm:border-4 border-primary shadow-lg transition-opacity duration-500 ease-in-out"
        />
        <img
          src="/lovable-uploads/b3dd4522-1b25-4dba-b027-73ed1fea8bd7.png"
          alt={`${data.name} - Animated`}
          className="profile-photo-animated absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full object-cover border-2 sm:border-4 border-primary shadow-lg opacity-0 transition-opacity duration-500 ease-in-out"
        />
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 animate-fade-in text-center max-w-4xl px-2">
        {data.name}
      </h1>
      <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium mb-4 text-center animate-fade-in max-w-3xl px-2">
        <span className="inline-block">{data.professionalTitle}</span>
        <span className="hidden sm:inline"> &bull; </span>
        <span className="block sm:inline mt-1 sm:mt-0">{data.tagline}</span>
      </div>
      <a
        href="#contact"
        className="mt-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-lg font-semibold shadow hover:scale-105 transition-all hover:bg-primary/90 text-sm sm:text-base"
      >
        Contact Me
      </a>
    </section>
  );
};

export default Hero;
