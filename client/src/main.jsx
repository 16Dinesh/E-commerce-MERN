import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Toaster } from "./components/ui/toaster.jsx";
import ServerLoader from "./components/server-loader/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <ServerLoader>
        <App />
      </ServerLoader>
      <Toaster />
    </Provider>
  </BrowserRouter>,
);
