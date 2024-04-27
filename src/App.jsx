import Generator from './components/Generator';
import Hero from './components/Hero';
import Workout from './components/Workout';

const App = () => {
  return (
    <main className="min-h-screen text-sm sm:text-base bg-gradient-to-r from-[#E5E7E9] to-[#cad9ea]">
      <Hero />
      <Generator />
      <Workout />
    </main>
  );
};

export default App;
