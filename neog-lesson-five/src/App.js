import "./styles.css";
import { useState } from "react";
/*JSX : 22:25 - 28:50
40:23 - 43:04
52:09 - 1:01:26
Input in React JS: 1:16:20 - 1:46:59
Lists in ReactJS : 1:59:00 - 2:05:35
Conditional JSX : 2:12:27 - 2:21:45
Converting an object to array: 2:21:58 - 2:27:55
Final Note: 2:33:52 -  2:37:23
*/

const emojiDictionary = {
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "💥": "Collision",
  "💫": "Dizzy",
  "💦": "Sweat Droplets",
  "💨": "Dashing Away",
  "🐵": "Monkey Face",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face",
  "🐕": "Dog",
  "🦮": "Guide Dog",
  "🐩": "Poodle",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐱": "Cat Face",
  "🐈": "Cat",
  "🦁": "Lion",
  "🐯": "Tiger Face",
  "🐅": "Tiger",
  "🐆": "Leopard",
  "🐴": "Horse Face",
  "🐎": "Horse",
  "🦄": "Unicorn",
  "🦓": "Zebra",
  "🦌": "Deer",
  "🐮": "Cow Face",
  "🐂": "Ox",
  "🐃": "Water Buffalo",
  "🐄": "Cow",
  "🐷": "Pig Face",
  "🐖": "Pig",
  "🐗": "Boar",
  "🐽": "Pig Nose",
  "🐏": "Ram",
  "🐑": "Ewe",
  "🐐": "Goat",
  "🐪": "Camel",
  "🐫": "Two-Hump Camel",
  "🦙": "Llama",
  "🦒": "Giraffe",
  "🐘": "Elephant",
  "🦏": "Rhinoceros",
  "🦛": "Hippopotamus",
  "🐭": "Mouse Face",
  "🐁": "Mouse",
  "🐀": "Rat",
  "🐹": "Hamster",
  "🐰": "Rabbit Face",
  "🐇": "Rabbit",
  "🦔": "Hedgehog",
  "🦇": "Bat",
  "🐻": "Bear",
  "🐨": "Koala",
  "🐼": "Panda",
  "🦥": "Sloth",
  "🦦": "Otter",
  "🦨": "Skunk",
  "🦘": "Kangaroo",
  "🦡": "Badger",
  "🐾": "Paw Prints",
  "🦃": "Turkey",
  "🐔": "Chicken",
  "🐓": "Rooster",
  "🐣": "Hatching Chick",
  "🐤": "Baby Chick",
  "🐥": "Front-Facing Baby Chick",
  "🐦": "Bird",
  "🐧": "Penguin",
  "🦅": "Eagle",
  "🦆": "Duck",
  "🦢": "Swan",
  "🦉": "Owl",
  "🦩": "Flamingo",
  "🦚": "Peacock",
  "🦜": "Parrot",
  "🐸": "Frog",
  "🐊": "Crocodile",
  "🐢": "Turtle",
  "🦎": "Lizard",
  "🐍": "Snake",
  "🐲": "Dragon Face",
  "🐉": "Dragon",
  "🦕": "Sauropod",
  "🦖": "T-Rex",
  "🐳": "Spouting Whale",
  "🐋": "Whale",
  "🐬": "Dolphin",
  "🐟": "Fish",
  "🐠": "Tropical Fish",
  "🐡": "Blowfish",
  "🦈": "Shark",
  "🐙": "Octopus",
  "🐚": "Spiral Shell",
  "🐌": "Snail",
  "🦋": "Butterfly",
  "🐛": "Bug",
  "🐜": "Ant",
  "🐝": "Honeybee",
  "🐞": "Lady Beetle",
  "🦗": "Cricket",
  "🕷": "️Spider",
  "🕸": "Spider Web",
  "🦂": "Scorpion",
  "🦟": "Mosquito",
  "🦠": "Microbe",
  "💐": "Bouquet",
  "🌸": "Cherry Blossom",
  "💮": "White Flower",
  "🏵": "️Rosette",
  "🌹": "Rose",
  "🥀": "Wilted Flower",
  "🌺": "Hibiscus",
  "🌻": "Sunflower",
  "🌼": "Blossom"
};

const emojis = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  const emojiInputHandler = (e) => {
    var userInput = e.target.value.trim();
    if (userInput === "") {
      setMeaning("");
    } else {
      setMeaning(emojiDictionary[userInput] || "we dont have this in our DB");
    }
  };

  const emojiClickHandler = (item) => {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  };

  return (
    <div>
      <div className="bg-image"></div>
      <div className="txt">
        <h1>Animals and Nature</h1>
        <input onChange={emojiInputHandler}></input>

        <h2>{meaning}</h2>

        <h3>Emojis we know</h3>
        <div>
          {emojis.map((item) => {
            return (
              <span key={item} onClick={() => emojiClickHandler(item)}>
                {item}{" "}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
