import React, { useState } from "react";
import { Card, CardActionArea, Typography, Button } from "@mui/material";

const styles = {
  padding: "20px 40px",
  margin: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "auto",
  minWidth: "400px",
  height: "200px",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  transition: "0.3s",
  "&:hover": {
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
  },
};

const WordCard = ({ currentWord, clicked, setClicked }) => {
  return (
    <Card sx={styles}>
      <Typography variant="h3">{currentWord.word}</Typography>
      {clicked ? (
        <Typography
          variant="h6"
          sx={{ marginTop: "20px" }}
        >
          {currentWord.translation}
        </Typography>
      ) : (
        <Button
          onClick={() => setClicked(true)}
          variant="contained"
          sx={{ marginTop: "20px" }}
        >
          Reveal Translation
        </Button>
      )}
    </Card>
  );
};

export default WordCard;
