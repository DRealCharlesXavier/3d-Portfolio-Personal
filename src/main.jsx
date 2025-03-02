import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "./components/ui/provider";
import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </Provider>
);
