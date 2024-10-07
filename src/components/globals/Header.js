import ThemeMode from './ThemeMode';

export default function Header() {
  return (
		<div className="fixed top-0 left-0 w-full">
			<div className="
				flex
				items-center
				m-3 
				rounded-[20px] 
				px-12
				py-6

				bg-primary/30
				text-primary
				dark:text-white
				dark:bg-primaryAlt/50

				">
				<div className="grow">
					<h1 className="text-3xl text-primary dark:text-white/70">Demo 01</h1>
				</div>
				<ThemeMode />
			</div>
		</div>

  );
}