import GlowButton from './GlowButton';

export default function Header() {
  return (
		<div className="fixed bottom-0 left-0 w-full">
			<div className="
				flex
				items-center
				justify-start
				m-3 
				rounded-[20px] 
				px-12
				py-12


				text-primary
				dark:text-white
				dark:bg-primaryAlt/50

				">
					<GlowButton to='/' icon='search' />
					
			</div>
		</div>

  );
}