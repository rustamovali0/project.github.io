import './App.css';
import Navbar from './Component/Navbar';
import Operation from './Component/Operation';
import { createContext,useState } from "react";

export const ThemeContext = createContext();

function App() {

  const [dark, setDark] = useState("#000")

  const data = {
    dark, setDark
  }
  return (
    <div className="App">
          <ThemeContext.Provider value = {data} >

      <Navbar/>
      <Operation/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
