import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project is{" "}
        <a
          href="https://github.com/MCpracticesforskills/humidity"
          target="_blank"
          rel="noopener noreferrer"
          title="repository on GitHub"
        >
          open sourced on GitHub
        </a>{" "}
        by{" "}
        <a
          href="https://endearing-pika-93dc27.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          title="Morgan's website & portfolio"
        >
          Morgan Coyle
        </a>
      </footer>
    </div>
  );
}

export default App;
