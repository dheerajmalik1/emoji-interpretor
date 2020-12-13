import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "": " ",
  " ": " ",
  "😗": ":-*",
  "😉": "Wink",
  ":)": "Smilling",
  ":-)": "Smilling",
  ":(": "Sad",
  ":-(": "Sad",
  ":P": "Naughty",
  ":p": "Naughty",
  ":D": "Hehe",
  "<3": "Love"
};

let emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setEmojiMeaning] = useState("");

  function emojiInputHandler(event) {
    const emojiInput = event.target.value;
    let meaning = emojiDictionary[emojiInput];

    if (meaning === undefined) {
      meaning = "We dont have this emoji in our DB :(";
    }
    setEmojiMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setEmojiMeaning(meaning);
  }

  return (
    <div style={{}} className="App">
      <h1>Welcome to emoji interpretor</h1>
      <h4>Enter an emoji like :) :-) etc and know their meaning</h4>
      <input onChange={emojiInputHandler} />
      <p style={{ backgroundColor: "yellow" }}>{meaning}</p>
      <h3>Emojis we know </h3>
      {emojisWeKnow.map((emojis) => {
        return (
          <span
            onClick={() => {
              emojiClickHandler(emojis);
            }}
            key={emojis}
            style={{ padding: ".7rem", fontSize: "2rem" }}
          >
            {emojis}
          </span>
        );
      })}
    </div>
  );
}
