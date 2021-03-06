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
  "ð": "See-No-Evil Monkey",
  "ð": "Hear-No-Evil Monkey",
  "ð": "Speak-No-Evil Monkey",
  "ðĨ": "Collision",
  "ðŦ": "Dizzy",
  "ðĶ": "Sweat Droplets",
  "ðĻ": "Dashing Away",
  "ðĩ": "Monkey Face",
  "ð": "Monkey",
  "ðĶ": "Gorilla",
  "ðĶ§": "Orangutan",
  "ðķ": "Dog Face",
  "ð": "Dog",
  "ðĶŪ": "Guide Dog",
  "ðĐ": "Poodle",
  "ðš": "Wolf",
  "ðĶ": "Fox",
  "ðĶ": "Raccoon",
  "ðą": "Cat Face",
  "ð": "Cat",
  "ðĶ": "Lion",
  "ðŊ": "Tiger Face",
  "ð": "Tiger",
  "ð": "Leopard",
  "ðī": "Horse Face",
  "ð": "Horse",
  "ðĶ": "Unicorn",
  "ðĶ": "Zebra",
  "ðĶ": "Deer",
  "ðŪ": "Cow Face",
  "ð": "Ox",
  "ð": "Water Buffalo",
  "ð": "Cow",
  "ð·": "Pig Face",
  "ð": "Pig",
  "ð": "Boar",
  "ð―": "Pig Nose",
  "ð": "Ram",
  "ð": "Ewe",
  "ð": "Goat",
  "ðŠ": "Camel",
  "ðŦ": "Two-Hump Camel",
  "ðĶ": "Llama",
  "ðĶ": "Giraffe",
  "ð": "Elephant",
  "ðĶ": "Rhinoceros",
  "ðĶ": "Hippopotamus",
  "ð­": "Mouse Face",
  "ð": "Mouse",
  "ð": "Rat",
  "ðđ": "Hamster",
  "ð°": "Rabbit Face",
  "ð": "Rabbit",
  "ðĶ": "Hedgehog",
  "ðĶ": "Bat",
  "ðŧ": "Bear",
  "ðĻ": "Koala",
  "ðž": "Panda",
  "ðĶĨ": "Sloth",
  "ðĶĶ": "Otter",
  "ðĶĻ": "Skunk",
  "ðĶ": "Kangaroo",
  "ðĶĄ": "Badger",
  "ðū": "Paw Prints",
  "ðĶ": "Turkey",
  "ð": "Chicken",
  "ð": "Rooster",
  "ðĢ": "Hatching Chick",
  "ðĪ": "Baby Chick",
  "ðĨ": "Front-Facing Baby Chick",
  "ðĶ": "Bird",
  "ð§": "Penguin",
  "ðĶ": "Eagle",
  "ðĶ": "Duck",
  "ðĶĒ": "Swan",
  "ðĶ": "Owl",
  "ðĶĐ": "Flamingo",
  "ðĶ": "Peacock",
  "ðĶ": "Parrot",
  "ðļ": "Frog",
  "ð": "Crocodile",
  "ðĒ": "Turtle",
  "ðĶ": "Lizard",
  "ð": "Snake",
  "ðē": "Dragon Face",
  "ð": "Dragon",
  "ðĶ": "Sauropod",
  "ðĶ": "T-Rex",
  "ðģ": "Spouting Whale",
  "ð": "Whale",
  "ðŽ": "Dolphin",
  "ð": "Fish",
  "ð ": "Tropical Fish",
  "ðĄ": "Blowfish",
  "ðĶ": "Shark",
  "ð": "Octopus",
  "ð": "Spiral Shell",
  "ð": "Snail",
  "ðĶ": "Butterfly",
  "ð": "Bug",
  "ð": "Ant",
  "ð": "Honeybee",
  "ð": "Lady Beetle",
  "ðĶ": "Cricket",
  "ð·": "ïļSpider",
  "ðļ": "Spider Web",
  "ðĶ": "Scorpion",
  "ðĶ": "Mosquito",
  "ðĶ ": "Microbe",
  "ð": "Bouquet",
  "ðļ": "Cherry Blossom",
  "ðŪ": "White Flower",
  "ðĩ": "ïļRosette",
  "ðđ": "Rose",
  "ðĨ": "Wilted Flower",
  "ðš": "Hibiscus",
  "ðŧ": "Sunflower",
  "ðž": "Blossom"
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
