
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full p-0 overflow-hidden"
    >
      <div className="relative w-full h-full">
        {/* Sun Icon */}
        <Sun 
          className={`absolute inset-0 m-auto w-5 h-5 transition-all duration-500 ease-in-out ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-75'
          }`}
        />
        
        {/* Moon Icon */}
        <Moon 
          className={`absolute inset-0 m-auto w-5 h-5 transition-all duration-500 ease-in-out ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-75'
          }`}
        />
      </div>
    </Button>
  );
};

export default ThemeToggle;
