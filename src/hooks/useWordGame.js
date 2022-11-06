import { useEffect, useState, useRef } from "react";

function useWordGame() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [gameRunning, setGameRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textboxRef = useRef(null);
  function handleChange(e) {
    setText(e.target.value);
  }

  function countWords(text) {
    const wordsArr = text.trim().split(" "); //trim the extra spaces so that they are not counted as words

    //if we click on button without typing anything above statement returns one length array ("" is the element)
    return wordsArr.filter((word) => word !== "").length;
  }

  function startGame() {
    setGameRunning(true);
    setTimeRemaining(5);
    setText("");
    setWordCount(0);
    textboxRef.current.disabled = false; //setGameRunning(true) is asynchronous so it takes time to make it true. Since it took time, below line of creating focus didn't work. So we manually did disabled = false.
    textboxRef.current.focus(); //focus is a method on html element
  }

  function endGame() {
    setGameRunning(false);
    setWordCount(countWords(text));
  }

  useEffect(() => {
    if (timeRemaining > 0 && gameRunning) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000); //setTimeout just fires once when the time is over
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, gameRunning]);

  return {textboxRef, handleChange, text, gameRunning, timeRemaining, startGame, wordCount}
}

export default useWordGame