import React, {createContext} from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";

export const Context = createContext(null);
console.log(process.env.REACT_APP_API_URL)

createRoot(document.getElementById("root")).render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore(),
    }}>
        <App />
    </Context.Provider>
);