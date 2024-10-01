import React from 'react'
import RouterLayout from './components/RouterLayout'
import HomePage from "./components/HomePage";
import ContactUs from "./components/ContactUs"
import Blog from "./components/Blog";
import Projects from './components/Projects';
import Education from "./components/Education";
import About from "./components/About";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
const App = () => {
  return (
    <>
    
    <BrowserRouter>
  <Routes>

  <Route path='/' element={<RouterLayout/>}>
      <Route index element={<HomePage/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='contactus' element={<ContactUs/>}/>
        <Route path='education' element={<Education/>}/>

    </Route>
  </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
