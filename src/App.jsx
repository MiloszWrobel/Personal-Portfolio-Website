import Background from "./components/Background";
import Projects from "./components/Projects";
import WEBSITES from "./data";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Background />
      <div className="min-h-screen bg-slate-300 grid grid-cols-3 gap-6">
        {WEBSITES.map((current) => (
          <Projects image={current.image} title={current.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
