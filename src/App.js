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
  "☸": "Wheel of Dharma",
  "🚾": "Water Closet",
  "💤": "Zzz",
  "🚸": "Children Crossing",
  "💲": "Heavy Dollar Sign"
};

export default function App() {
  const [meaning, setMeaning] = useState(null);

  const symbolArray = Object.keys(symbolEmojiDictionary);

  const inputChangeHandler = (event) => {
    const emoji = event.target.value;
    const meaning = symbolEmojiDictionary[emoji];

    if (!meaning) {
      setMeaning("Oops! This one seems out of syllabus");
    } else {
      setMeaning(`${emoji} : ${meaning}`);
    }

    if (emoji === "") setMeaning(null);
  };

  const clickEmojiHandler = (emoji) => {
    setMeaning(`${emoji} : ${symbolEmojiDictionary[emoji]}`);
  };

  return (
    <div className="App">
      <h1>Symbols and their meanings!</h1>
      <input onChange={inputChangeHandler} />

      <h2>{meaning ? meaning : "Enter a symbol to intepret its meaning"}</h2>
      <div className="flex-container">
        {symbolArray.map((item) => {
          return (
            <span onClick={() => clickEmojiHandler(item)} className="emoji">
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
