import { useConContext } from "../lib/context";

export const ConButton = () => {
  const { state } = useConContext();
  return <button>{state.hello}</button>;
};
