import Background from "./components/Background";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Background />
      <div className="min-h-screen">
        <Projects />
        <Projects />
        <Projects />
        <Projects />
      </div>
    </div>
  );
}

export default App;
