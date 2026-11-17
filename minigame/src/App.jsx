import { createContext, useContext, useDebugValue, useState } from "react";
import "./App.css";

const AppContext = createContext(null);

export function App() {
    const [theme, setTheme] = useState("light");

    return (
        <AppContext.Provider value={{ theme, setTheme }}>
            <Form />
        </AppContext.Provider>
    );
}
function debuggerHook() {
    const appContext = useContext(AppContext);
    useDebugValue(appContext == "panel-light" ? "panel-dark" : "panel-light");
}

function Form() {
    const appContext = useContext(AppContext);
    const id = useId();
    const id2 = useId();
    debuggerHook();
    return (
        <div className={appContext === "panel-light" ? "panel-dark" : "panel-light"}>
            {" "}
            {id} {id2}
        </div>
    );
}
function handleClick() {
    document.body.classList.toggle("panel-dark");
}
