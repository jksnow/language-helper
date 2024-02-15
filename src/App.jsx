import { useState } from "react";
import { wordList1 } from "./data/words";
import "./App.css";
import WordCard from "./components/WordCard";
import { Box, Button } from "@mui/material";

const buttonStyle = {
  borderColor: "#fff",
  color: "#fff",
};

function App() {
  const [wordList, setWordList] = useState(wordList1);
  const currentWord = wordList[Math.floor(Math.random() * wordList.length)];
  const [clicked, setClicked] = useState(false);

  // remove the current word from the list and generate next word
  const handleNextWord = () => {
    setClicked(false);
    //if there is only one word left, reset the word list
    if (wordList.length === 1) {
      setWordList(wordList1);
      return;
    }
    const newWordList = wordList.filter((word) => word !== currentWord);
    setWordList(newWordList);
  };

  return (
    <>
      <WordCard
        clicked={clicked}
        setClicked={setClicked}
        currentWord={currentWord}
      />
      <Box>
        <Button
          onClick={handleNextWord}
          variant="outlined"
          sx={buttonStyle}
        >
          Next Word
        </Button>
      </Box>
    </>
  );
}

export default App;
