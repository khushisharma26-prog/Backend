import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  return (
    <>
      <div>Hello World</div>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke, index) => {
        <div key={joke.id}>
          <h3>{joke.title}</h3>
        </div>;
      })}
    </>
  );
}

export default App;
