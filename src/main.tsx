import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router";
import { ModalProvider } from "./ModalProvider.tsx";

createRoot(document.getElementById("root")!).render(
    //<StrictMode>

    <BrowserRouter>
        <Provider store={store}>
            <ModalProvider>
                <App />
            </ModalProvider>
        </Provider>
    </BrowserRouter>
    //</StrictMode>
);
