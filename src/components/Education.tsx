
import { usePortfolioData } from '@/hooks/usePortfolioData';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  const data = usePortfolioData();
  
  if (!data.education || data.education.length === 0) {
    return null;
  }
  
  return (
    <div id="education">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center sm:text-left">Education</h2>
      <div className="space-y-4 sm:space-y-6">
        {data.education.map((edu, index) => (
          <div key={index} className="relative border border-border rounded-xl p-4 sm:p-6 bg-gradient-to-r from-card/90 to-card/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-50"></div>
            
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors shadow-sm">
                    <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-lg sm:text-xl font-semibold text-muted-foreground flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      {edu.institution}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{edu.startYear} - {edu.endYear}</span>
                  </div>
                  
                  {edu.field && (
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Field: {edu.field}
                    </div>
                  )}
                  
                  {edu.description && (
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-2 border-t border-border/50">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
