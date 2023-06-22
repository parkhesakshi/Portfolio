import React,{useEffect} from 'react'
import HomePage from './page/HomePage'
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {

  useEffect(() => { 
    AOS.init();
  }, [])
  return (
    <HomePage />
  )
}
export default App