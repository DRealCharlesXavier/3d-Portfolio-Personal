import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "./components/ui/provider";
import { ChakraProvider } from "@chakra-ui/react"


ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <Provider>
      <App />
    </Provider>
  </ChakraProvider>
);
