
import { usePortfolioData } from '@/hooks/usePortfolioData';

const About = () => {
  const data = usePortfolioData();
  
  const getAlignmentClass = (alignment: string) => {
    switch (alignment) {
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';
      default:
        return 'text-left';
    }
  };
  
  return (
    <div id="about">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center sm:text-left">About Me</h2>
      <p className={`text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed whitespace-pre-line ${getAlignmentClass(data.aboutTextAlignment)}`}>
        {data.aboutText.replace('Your Name', data.name)}
      </p>
    </div>
  );
};

export default About;
