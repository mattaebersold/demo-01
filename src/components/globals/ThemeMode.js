import { useTheme } from '../../providers/ThemeProvider';

export default function ThemeMode() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} className="
      min-w-[40px] 
      h-[40px] 
      bg-black 
      rounded-full 
      overflow-hidden 
      group 
      cursor-pointer
      flex
      items-center
      transition-all 
      duration-300
      ease-in-out">
      <span 
        className="
          cursor-pointer
          text-[12px]
          text-white 
          relative 
          top-[1px] 
          opacity-0 
          w-0
          whitespace-nowrap
          overflow-hidden
          group-hover:w-auto 
          group-hover:opacity-100 
          group-hover:px-4
          transition-all 
          duration-300 
          ease-in-out">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </span>
    </div>
  );
}
