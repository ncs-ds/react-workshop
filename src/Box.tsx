import "./App.css";
import { FC } from "react";

export interface BoxProps {
  visible: boolean;
  colour: string;
}

const Box: FC<BoxProps> = ({ visible, colour }) => {
  return <>{visible && <div className={`myBox ${colour}`}></div>}</>;
};

export default Box;
