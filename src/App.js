import { useState } from "react";
import "./styles.css";

const symbolEmojiDictionary = {
  "🛐": "Place of Worship",
  "☯": "Yin Yang",
  "🔱": "Trident Emblem",
  "☮": "Peace Symbol",
  "🔰": "Japanese Symbol for Beginner",
  ℹ️: "Information",
  "🌀": "Cyclone",
  "☢️": "Radioactive",
  "🀄": "Mahjong Red Dragon",
  "⚕": "Medical Symbol",
  "📯": "Postal Horn",
  "🚮": "Litter in Bin Sign",
  "☣️": "Biohazard",
  "♉": "Taurus",
  "〽️": "Part Alternation Mark",
  "☸": "Wheel of Dharma"
};

export default function App() {
  const [meaning, setMeaning] = useState("Enter a symbol emoji to intepret");

  const symbolArray = Object.keys(symbolEmojiDictionary);

  const inputChangeHandler = (event) => {};

  return (
    <div className="App">
      <h1>Symbols and their meanings!</h1>
      <input onChange={inputChangeHandler} />

      <h2>{meaning}</h2>
      {symbolArray.map((item) => {
        return <span className="emoji">{item}</span>;
      })}
    </div>
  );
}
