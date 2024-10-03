export default function ThemeMode() {
  return (
    <div className="
      min-w-[30px] 
      h-[30px] 
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
        Switch to dark mode
      </span>
    </div>
  );
}
