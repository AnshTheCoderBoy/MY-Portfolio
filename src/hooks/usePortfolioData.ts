interface ProjectData {
  title: string;
  description: string;
  tech: string[];
  img: string;
  link: string;
}

interface ContactData {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  github: string;
  linkedin: string;
}

interface HobbyItem {
  title: string;
  description: string;
  image: string;
  details?: string;
  audio?: string;
}

interface HobbiesData {
  gym: HobbyItem[];
  gaming: HobbyItem[];
  music: HobbyItem[];
  movies: HobbyItem[];
}

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  description?: string;
  gpa?: string;
}

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

interface PortfolioData {
  name: string;
  professionalTitle: string;
  tagline: string;
  aboutText: string;
  aboutTextAlignment: 'left' | 'center' | 'right';
  profileImage: string;
  skills: {
    programming: string[];
    forensics: string[];
    tools: string[];
    systems: string[];
    soft: string[];
    languages: string[];
  };
  projects: ProjectData[];
  hobbies: HobbiesData;
  education: EducationItem[];
  experience: ExperienceItem[];
  contact: ContactData;
}

const portfolioData: PortfolioData = {
  name: 'Anshul Prakash Wadbudhe',
  professionalTitle: 'IT Support Executive & Web Developer',
  tagline: 'Building Solutions with Code & Technical Expertise',
  aboutText: "Detail-oriented and technically skilled IT Support Executive with over 2 years of hands-on experience in desktop support, system administration, and basic web development. Proven ability to troubleshoot hardware, software, and networking issues. Proficient in Python, Django, and modern AI tools. Strong communicator and quick learner, open to both onsite and remote roles, with a passion for continuous growth.",
  aboutTextAlignment: 'left',
  profileImage: '',
  skills: {
    programming: ["Python", "Pandas", "NumPy", "Seaborn", "Jupyter", "MySQL", "REST APIs", "Data Cleaning"],
    forensics: ["Data analysis", "Documentation", "Troubleshooting logs", "Remote system access"],
    tools: ["AnyDesk", "TeamViewer", "Remote Desktop", "Microsoft Excel", "PowerPoint", "Word", "Git/GitHub"],
    systems: ["Windows OS", "Active Directory", "Outlook Configuration", "Antivirus", "Networking"],
    soft: ["Agile", "Curious", "Detail-Oriented", "Problem Solver", "Adaptable", "Team Collaboration"],
    languages: ["Hindi (Fluent)", "English (Fluent)", "Marathi (Fluent)", "Japanese (Basic, Learning)"]
  },
  projects: [
    {
      title: "Ecommerce Sales Analysis",
      description: "Analyzed ecommerce sales data using Python, Pandas, and Matplotlib. Cleaned and explored the dataset to identify sales trends, top customers, and seasonal revenue patterns. Generated visual insights to support business decision-making.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
      link: "https://github.com/AnshTheCoderBoy/Ecommerce-Sales-Analysis"
    },
    {
      title: "Django Student Portal",
      description: "Built a web-based portal using Django and SQLite to manage student records with login/logout, form submissions, and CRUD operations.",
      tech: ["Django", "Python", "SQLite", "HTML", "CSS"],
      img: "/projects/scholer.png",
      link: "https://github.com/AnshTheCoderBoy/Scholar-Portal.git"
    },
    {
      title: "GameOz",
      description: "GameOz, the ultimate destination for gaming enthusiasts. Immerse yourself in a world of endless possibilities, where you can discover, download, and experience your favorite games like never before.",
      tech: ["Tailwind", "RAWG AP", " React "],
      img: "/projects/gamesite.png",
      link: "https://gameoz.netlify.app/"
    },
    {
      title: "Personal Portfolio Website",
      description: "Developed a static website using HTML, CSS, and JavaScript to showcase skills and contact information.",
      tech: ["React", "Tailwind", "TypeScript"],
      img: "/projects/portfolio.png",
      link: "https://anshulhub.netlify.app/"
    },
    {
      title: "TazaTunes",
      description: " Play songs from your own device, tune in to live radio, and get the latest news from India and around the world — all in one place, no login needed.",
      tech: ["React", "Tailwind", "TypeScript"],
      img: "/projects/tazatunes.png",
      link: "https://tazatunes.netlify.app/"
    }
  ],
  hobbies: {
    gym: [
      {
        title: "Daily Fitness Routine",
        description: "I go to the gym every day at 6 AM and follow a structured push-pull workout routine that keeps my training balanced and effective. My focus is on building strength, improving endurance, and staying consistent. I meet my protein needs naturally through a clean diet including eggs, veggies, and other whole foods, and I support my performance with daily creatine intake. This routine not only helps me stay fit but also builds discipline, mental clarity, and a strong start to every day. Fitness is not just a habit for me—it's a lifestyle.",
        image: "/gym/gym.jpeg"
      }
    ],
    gaming: [
      {
        title: "Assassin's Creed Series",
        description: "I like the Assassin's Creed series because it makes me feel like I'm actually living in ancient history. Each game lets me step into the life of an assassin during iconic time periods like ancient Egypt, Renaissance Italy, or the Viking era. I love the mix of real historical events with a powerful fictional story. The gameplay—full of stealth, parkour, and intense missions—combined with detailed open worlds, makes me feel completely immersed in the past like I'm part of that world.",
        image: "/game/Assassin's-Creed.jpg"
      },
      {
        title: "GTA IV",
        description: "I love GTA IV because of its powerful storyline and the unforgettable character of Niko Bellic. His journey from a war-torn past to chasing the American Dream in Liberty City is emotional, intense, and deeply human. The game blends action, drama, and choice in a way that makes every moment feel real. Playing as Niko isn't just about missions—it's about living his story.",
        image: "/game/gta-iv.jpeg"
      },
      {
        title: "Alan Wake",
        description: "I like Alan Wake because of its deep, mysterious story and the way the game feels like playing through a suspenseful thriller. You play as Alan, a writer stuck in a nightmare where his own unwritten story becomes real. After his wife disappears, he's forced to survive against shadowy enemies using only light. The game's intense atmosphere, dramatic moments, and emotional twists kept me completely hooked—that's what I loved most about it.",
        image: "/game/alan-awake.jpg"
      }
    ],
    music: [
      {
        title: "Intentions by Justin Bieber",
        description: "One of my favorite songs is Intentions by Justin Bieber. I love it because every time I hear it, it takes me back to those peaceful post-lockdown mornings when life slowly started to feel normal again. I used to listen to it during my early walks, with cool wind brushing my face and a quiet hope in the air. After the chaos of the pandemic, this song became a symbol of healing and fresh beginnings. It reminds me of the simple joy of being outside, feeling free, and believing that better days were finally on their way.",
        image: "/music/JustinBieberIntentions.jpg",
        audio: "/music/JustinBieberIntentions.mp3"
      }
    ],
    movies: []
  },
  education: [
    {
      institution: "GH Raisoni Institute of Engineering & Technology, Nagpur",
      degree: "Bachelor of Computer Applications (BCA)",
      field: "Computer Applications",
      startYear: "2020",
      endYear: "2023",
      description: "Comprehensive program covering programming fundamentals, software development, database management, and system analysis."
    }
  ],
  experience: [
    {
      company: "Sona Nutrients Pvt. Ltd., Rajasthan",
      position: "Technical Support Analyst (Contract)",
      location: "Rajasthan",
      startDate: "Sept 2023",
      endDate: "May 2025",
      description: [
        "Provided remote and onsite support to 50+ users for Windows, Outlook, and hardware/software issues",
        "Leveraged tools like AnyDesk and TeamViewer to resolve incidents efficiently",
        "Logged and analyzed system errors to detect patterns and prevent recurring issues",
        "Administered user credentials and access policies using Active Directory",
        "Developed internal documentation for support protocols and issue resolution logs"
      ]
    },
    {
      company: "Remote",
      position: "Freelance Python Developer & Tech Support",
      location: "Remote",
      startDate: "Ongoing",
      endDate: "Present",
      description: [
        "Designed Python scripts for automation and log parsing to identify technical anomalies",
        "Supported global users in software setup and PC optimization via remote access",
        "Built REST API solutions for various client requirements"
      ]
    }
  ],
  contact: {
    email: 'anshwb26@gmail.com',
    phone: '+91 7820855430',
    whatsapp: '+91 8055195780',
    address: 'India',
    github: 'https://github.com/AnshTheCoderBoy',
    linkedin: 'https://linkedin.com/'
  }
};

export const usePortfolioData = () => {
  return portfolioData;
};
