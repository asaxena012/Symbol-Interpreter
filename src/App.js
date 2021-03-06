import { useState } from "react";
import "./styles.css";

const symbolEmojiDictionary = {
  "đ": "Place of Worship",
  "â¯": "Yin Yang",
  "đą": "Trident Emblem",
  "âŽ": "Peace Symbol",
  "đ°": "Japanese Symbol for Beginner",
  âšī¸: "Information",
  "đ": "Cyclone",
  "âĸī¸": "Radioactive",
  "đ": "Mahjong Red Dragon",
  "â": "Medical Symbol",
  "đ¯": "Postal Horn",
  "đŽ": "Litter in Bin Sign",
  "âŖī¸": "Biohazard",
  "â": "Taurus",
  "ãŊī¸": "Part Alternation Mark",
  "â¸": "Wheel of Dharma",
  "đž": "Water Closet",
  "đ¤": "Zzz",
  "đ¸": "Children Crossing",
  "đ˛": "Heavy Dollar Sign"
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
