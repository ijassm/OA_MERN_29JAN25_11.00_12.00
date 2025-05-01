import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Counter } from "./features";
import { Provider } from "react-redux";
import { store } from "./features/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </StrictMode>
);
