import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import './App.css'
import Home from "./components/Home"
const App = () => {
  
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
export default App 
