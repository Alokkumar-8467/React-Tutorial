import useLocalStorage from "./useLocalStorage"
import "./theme.css"

export default function LightDarkMode(){

    const [theme , setTheme] = useLocalStorage("theme", "dark")


    
  function handleToggleTheme(){
    setTheme(theme === "light" ? "dark" : "light" )
  }
  console.log(theme)

    return (

<div className='light-dark-mode flex justify-start' data-theme={theme}>
        <div className=''>
          <button className="bg-slate-200 gap-3 shadow-lg px-3 py-2 rounded-3xl mt-5 " onClick={handleToggleTheme}>Change Theme</button>
        </div>
      </div>
    )
}