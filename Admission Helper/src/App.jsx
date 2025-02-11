// import React from 'react'

import { BrowserRouter, Route,  Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Homepage from "./Pages/Homepage"
import AboutUs  from "./Pages/AboutUs"
import Contacts  from "./Pages/Contacts"
import Details  from "./Pages/Details"
import Footer from "./Pages/Footer"
const App = () => {
  return (
    
      <BrowserRouter>
      <div className="flex flex-col min-h-screen">
      <Navbar/>

      <main className="flex grow container mx-auto p-6  justify-center bg-gray-100">
      <Routes className="flex grow p-4">
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<Contacts/>} />
          <Route path="/details" element={<Details/>} />
        </Routes>
      </main>
        
        <Footer/>
      </div>
      
      </BrowserRouter>
    
  )
}

export default App
