import React from "react";
import DragDrop from "./components/DragDrop";
import "./App.css";
const finalSpaceCharacters = [
  {
    id: "gary",
    name: "Gary Goodspeed",
    thumb: "/images/gary.png",
  },
  {
    id: "cato",
    name: "Little Cato",
    thumb: "/images/cato.png",
  },
  {
    id: "kvn",
    name: "KVN",
    thumb: "/images/kvn.png",
  },
  {
    id: "mooncake",
    name: "Mooncake",
    thumb: "/images/mooncake.png",
  },
  {
    id: "quinn",
    name: "Quinn Ergon",
    thumb: "/images/quinn.png",
  },
];

const sortHandler = () => {
  const characters = finalSpaceCharacters;
  characters.sort((a, b) => a.name.localeCompare(b.name));
  console.log(characters);
};
const App = () => {
  const characters = finalSpaceCharacters;

  return (
    <div className="App">
      <header className="App-header">
        <h1 data-testid="title-content">Final Space Characters</h1>
        <span data-testid="text-content">
          You can drag and drop the list below
        </span>
        <button onClick={sortHandler}>sort</button>
        <DragDrop data={characters} />
      </header>
    </div>
  );
};
export default App;
