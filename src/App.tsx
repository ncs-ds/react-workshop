import { Button } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import Box from "./Box";
import ColourNarrative from "./ColourNarrative";

function App() {
  const [myColour, setMyColour] = useState("red");
  const [isBoxVisible, setIsBoxVisible] = useState(true);

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => setIsBoxVisible((oldValue) => !oldValue)}
      >
        {isBoxVisible ? "Hide" : "Show"}
      </Button>

      <Button variant="outlined" onClick={() => setMyColour("red")}>
        Red
      </Button>
      <Button variant="contained" onClick={() => setMyColour("blue")}>
        Blue
      </Button>
      <Box visible={isBoxVisible} colour={myColour}></Box>
      <ColourNarrative colour={myColour}></ColourNarrative>
    </>
  );
}

export default App;
