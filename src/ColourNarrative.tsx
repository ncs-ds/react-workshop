import { Typography } from "@material-ui/core";
import { FC } from "react";

export interface ColourNarrativeProps {
  colour: string;
}

const ColourNarrative: FC<ColourNarrativeProps> = ({ colour }) => {
  return (
    <>
      <Typography variant="h6">The colour is {colour}!</Typography>
    </>
  );
};

export default ColourNarrative;
