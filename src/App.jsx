import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Pages/NavBar/NavBar'
import Footer from './Pages/Footer/Footer'


function App() {


  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>

    </>
  )
}

export default App
