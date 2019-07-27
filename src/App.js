import React from "react";
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvide from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvide>
          <Navbar />
          <Booklist />
          <ThemeToggle />
        </AuthContextProvide>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
