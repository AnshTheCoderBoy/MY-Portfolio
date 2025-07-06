
import { usePortfolioData } from '@/hooks/usePortfolioData';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const data = usePortfolioData();
  
  if (!data.experience || data.experience.length === 0) {
    return null;
  }
  
  return (
    <div id="experience">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center sm:text-left">Professional Experience</h2>
      <div className="space-y-4 sm:space-y-6">
        {data.experience.map((exp, index) => (
          <div key={index} className="relative border border-border rounded-xl p-4 sm:p-6 bg-gradient-to-r from-card/80 to-card/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.position}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.startDate} - {exp.endDate}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                          <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
