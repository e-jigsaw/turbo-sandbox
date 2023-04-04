import { Button } from "ui";
import { ConProvider } from "../lib/context";
import { ConButton } from "../components/ConButton";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <ConProvider>
        <ConButton></ConButton>
      </ConProvider>
    </div>
  );
}
