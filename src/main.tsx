import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { persistor, store } from "./redux/store.ts";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router";
import { ModalProvider } from "./ModalProvider.tsx";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
    //<StrictMode>

    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ModalProvider>
                    <App />
                </ModalProvider>
            </PersistGate>
        </Provider>
    </BrowserRouter>
    //</StrictMode>
);
