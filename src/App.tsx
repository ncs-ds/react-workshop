import { Button } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import MyBox from "./MyBox";
import ColourNarrative from "./ColourNarrative";

function App() {
  const [myColour, setMyColour] = useState<string>("red");
  const [isBoxVisible, setIsBoxVisible] = useState<boolean>(true);
  const [colours, setColours] = useState<string[]>(["red", "green", "blue"]);

  function addColourChangeHandler(newColour: string) {
    setColours([...colours, newColour]);
    setMyColour(newColour);
  }

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => setIsBoxVisible((oldValue) => !oldValue)}
      >
        {isBoxVisible ? "Hide" : "Show"}
      </Button>

      {colours.map((colour, idx) => (
        <Button
          key={colour + "-" + idx + "-button"}
          variant="outlined"
          onClick={() => setMyColour(colour)}
        >
          {colour}
        </Button>
      ))}
      {isBoxVisible && (
        <MyBox currentColour={myColour} addColour={addColourChangeHandler} />
      )}
      <ColourNarrative colour={myColour} />
    </>
  );
}

export default App;
