import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ColorModeProvider } from "./components/ui/provider";



ReactDOM.createRoot(document.getElementById("root")).render(
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
);
