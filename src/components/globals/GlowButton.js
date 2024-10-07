import { FaSearch } from "react-icons/fa";

export default function GlowButton({icon, to}) {
  return (
		<div
			class="
				relative 
				flex 
				justify-center 
				items-center
				cursor-pointer
			"
		>
			<div class="
				absolute 
				w-[70px] 
				h-[70px] 
				rounded-full 
				z-1 
				hover:bg-black/20
				transition
				animate-[spin_3s_linear_infinite] 
				shadow-[1px_-1px_5px_2px_#aab3d2,1px_2px_1px_1px_#1b7d8f,2px_1px_1px_2px_#f30bf5]">
			</div>

			<div className='relative text-primary dark:text-white pointer-events-none'>
				{icon === 'search' && (
					<FaSearch className="text-2xl" />
				)}
			</div>
		</div>
  );
}