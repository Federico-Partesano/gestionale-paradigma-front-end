/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import ThemeProvider from "./redux/providers/theme-provider";
import PersistProvider from "./redux/providers/persist-provider";
import { store } from "./redux/store";
import "./index.scss";
import App from "./App";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <PersistProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </PersistProvider>
    </Provider>
);
