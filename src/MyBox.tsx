import "./App.css";
import Constants from "./Constants";
import { FC, useRef } from "react";
import { Button } from "@material-ui/core";

export interface BoxProps {
  currentColour: string;
  addColour: (newColour: string) => void;
}

function isCorrectColourName(input: string): boolean {
  return (
    Constants.CSS_COLOUR_NAMES.findIndex(
      (name) => input.toLowerCase() === name.toLowerCase()
    ) > -1
  );
}

const MyBox: FC<BoxProps> = ({ currentColour, addColour }) => {
  const desiredColourInput = useRef<HTMLInputElement>(null);
  return (
    <>
      <div className="myBox" style={{ backgroundColor: currentColour }}>
        <p>I don't want to be {currentColour}.</p>
        <p>
          I want to be
          <input type="text" ref={desiredColourInput}></input>
          <Button
            variant="contained"
            onClick={() => {
              if (desiredColourInput.current?.value) {
                let input = desiredColourInput.current.value;
                if (isCorrectColourName(input)) {
                  addColour(desiredColourInput.current?.value || "");
                } else {
                  console.error(
                    "Wrong input: %s is not a valid CSS colour.",
                    input
                  );
                }
                desiredColourInput.current.value = "";
              }
            }}
          >
            OK
          </Button>
        </p>
      </div>
    </>
  );
};

export default MyBox;
