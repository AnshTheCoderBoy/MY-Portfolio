
import { usePortfolioData } from '@/hooks/usePortfolioData';
import { Code, Search, Wrench, Settings, Users, Languages } from 'lucide-react';

const Skills = () => {
  const data = usePortfolioData();
  
  const skillCategories = [
    {
      title: "Programming & Data",
      icon: Code,
      skills: data.skills.programming,
      color: "from-blue-500/20 to-blue-600/10"
    },
    {
      title: "Forensics & Discovery",
      icon: Search,
      skills: data.skills.forensics,
      color: "from-green-500/20 to-green-600/10"
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: data.skills.tools,
      color: "from-purple-500/20 to-purple-600/10"
    },
    {
      title: "Systems Support",
      icon: Settings,
      skills: data.skills.systems,
      color: "from-orange-500/20 to-orange-600/10"
    },
    {
      title: "Languages",
      icon: Languages,
      skills: data.skills.languages,
      color: "from-cyan-500/20 to-cyan-600/10"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: data.skills.soft,
      color: "from-pink-500/20 to-pink-600/10"
    }
  ];
  
  return (
    <div id="skills">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center sm:text-left">Core Competencies & Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div key={index} className={`p-4 sm:p-6 rounded-xl border border-border bg-gradient-to-br ${category.color} hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-background/80 rounded-lg group-hover:bg-background transition-colors">
                  <IconComponent className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-background/60 text-foreground rounded-full border border-border/50 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
