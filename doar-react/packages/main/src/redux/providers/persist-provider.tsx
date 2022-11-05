import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store";

const PersistProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    );
};

export default PersistProvider;
