import React, { createContext, useState, useContext, use } from "react";

const ThemeContext = createContext();

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const styles = {
        light: {background: "white", color: "black"},
        dark: {background: "black", color: "white"}
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div style={styles[theme]}>
                <Header />
                <Main />
                <Footer />
            </div>
        </ThemeContext.Provider>
    );
}

function Header() {
    const { theme } = useContext(ThemeContext);
    return <header><h1>Header - Tema: {theme}</h1></header>;
}

function Main() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <main>
            <p>Main - Tema: {theme}</p>
            <button onClick={toggleTheme}>Alterar Tema</button>
        </main>
    );
}

function Footer() {
    const { theme } = useContext(ThemeContext);
    return <footer><p>Footer - Tema: {theme}</p></footer>;
}

export default App;