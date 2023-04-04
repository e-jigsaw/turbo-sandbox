import constate from "constate";
import { useReducer } from "react";

type State = {
  hello: "world" | "world!!!";
};

const InitState: State = {
  hello: "world",
};

const useCon = ({ initState = InitState }) => {
  const [state, dispatch] = useReducer((state: State, action: "action") => {
    return state;
  }, initState ?? InitState);
  return { state, dispatch };
};

export const [ConProvider, useConContext] = constate(useCon);
