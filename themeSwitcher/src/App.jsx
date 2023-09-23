import { useEffect, useState } from "react";
import "./App.css";
import { ThemeContextProvider } from "./Context/themeContext";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

function App() {
  const [theme,setTheme]=useState("light")

  const darkMode=()=>{
    setTheme("dark")
  }
  const lightMode=()=>{
    setTheme("light")
  }
  //Change in theme
useEffect(()=>{
document.querySelector("html").classList.remove("light","dark")
document.querySelector("html").classList.add(theme)
},[theme])

  return (
    <ThemeContextProvider value={{theme,darkMode,lightMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
         <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>
    </ThemeContextProvider>
  );
}

export default App;
