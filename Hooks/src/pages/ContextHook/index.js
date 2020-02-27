import React, { useContext } from "react";

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee",
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222",
    },
};

const ThemeContext = React.createContext(themes.light);

export default function App() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
            <ThemeContext.Consumer>
                {context => {
                    return <ThemedButton2 {...context} />;
                }}
            </ThemeContext.Consumer>
        </div>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);

    return (
        <button style={{ background: theme.background, color: theme.foreground }}>I am styled by theme context!</button>
    );
}

function ThemedButton2(props) {
    return (
        <button style={{ background: props.background, color: props.foreground }}>I am styled by theme context!</button>
    );
}
