import Header from './components/globals/Header';
import Nav from './components/globals/Nav';


function App() {
  return (
    <div>
     <Header />

     <div className="my-[150px] px-12 text-primary dark:text-white">
     <p className="font-bold mt-4">On this demo:</p>
      <ul>
        <li>light/dark mode</li>
        <li>Glow button</li>
      </ul>

      <p className="font-bold mt-4">Next</p>
      <ul>
        <li>parallax mapping</li>
      </ul>
     </div>
     <Nav />
    </div>
  );
}

export default App;
