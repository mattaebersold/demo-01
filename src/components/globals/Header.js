import ThemeMode from './ThemeMode';

export default function Header() {
  return (
		<div className="fixed top-0 left-0 w-full">
			<div className="
				m-3 
				rounded-[20px] 
				bg-primaryAlt/50
				px-6
				py-4 
				text-white
				flex
				items-center">
				<div className="grow">
					<h1 className="text-2xl font-bold text-white/70">Demo 01</h1>
				</div>
				<ThemeMode />
			</div>
		</div>

  );
}