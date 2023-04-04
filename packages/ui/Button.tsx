import { useState } from "react";

export const Button = () => {
  const [text, setText] = useState("Boop");
  return <button onClick={() => setText("Poop")}>{text}</button>;
};
