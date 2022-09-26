import { useReducer } from "react";
import "./styles.css";

function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

export default function App() {
  const [count, Dispatch] = useReducer(reducer, 1);

  return (
    <div className="App">
      <h1>count:{count}</h1>
      <button
        onClick={() => {
          Dispatch({ type: "INC", payload: "1" });
        }}>
        Increment
      </button>
      <button
        onClick={() => {
          Dispatch({ type: "DEC", payload: "1" });
        }}>
        Decrement
      </button>
      <button
        onClick={() => {
          Dispatch({ type: "RESET", payload: 0 });
        }}>
        RESET
      </button>
    </div>
  );
}
