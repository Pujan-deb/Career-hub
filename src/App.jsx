import { Outlet } from "react-router-dom"
import Header from "./Components/Header/Header"
import Hompage from "./Components/Home/Hompage"



function App() {

  return (
    <>
      <Header></Header>

      <Outlet></Outlet>
    </>
  )
}

export default App
