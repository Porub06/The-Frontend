import { createContext, useContext, useState } from "react";
import "./App.css";

const AppContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("light");

    return (
        <AppContext.Provider value={{ theme, setTheme }}>
            <Form />
        </AppContext.Provider>
    );
}

function Form() {
    const { theme, setTheme } = useContext(AppContext);
    const nextTheme = theme === "light" ? "dark" : "light";

    return (
        <div className={`panel-${theme}`}>
            <div>Welcome to the form</div>
            <button className={`button-${theme}`} onClick={() => setTheme(nextTheme)}>
                Tema {nextTheme} mod
            </button>
        </div>
    );
}

export default App;
