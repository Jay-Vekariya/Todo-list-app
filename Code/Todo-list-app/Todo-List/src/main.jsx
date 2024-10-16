import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Todo_List from "./assets/Components/Todo_List.jsx";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./assets/Components/Store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <Todo_List />
    </Provider>
  </StrictMode>
);
