// // import React from 'react'

// import { BrowserRouter, Route,  Routes } from "react-router-dom"
// import Navbar from "./Components/Navbar"
// import Homepage from "./Pages/Homepage"
// import AboutUs  from "./Pages/AboutUs"
// import Contacts  from "./Pages/Contacts"
// import Details  from "./Pages/Details"
// import Footer from "./Pages/Footer"
// import SubjectComparison from "./Pages/SubjectComparison"
// import AdmissionTest from "./Pages/AdmissionTest"
// const App = () => {
//   return (
    
//       <BrowserRouter>
//       <div className="flex flex-col min-h-screen">
//       <Navbar/>

//       <main className="flex grow container mx-auto p-6  justify-center bg-gray-100">
//       <Routes className="flex grow p-4  " >
//           <Route path="/" element={<Homepage/>}/>
//           <Route path="/admissionTest" element={<AdmissionTest/>} />
//           <Route path="/about" element={<AboutUs/>} />
//           <Route path="/contact" element={<Contacts/>} />
//           <Route path="/details/:universityId" element={<Details/>} />\
//           <Route path="/subjectComparison" element={<SubjectComparison/>} />  
//         </Routes>
//       </main>
        
//         <Footer/>

//       </div>
      
//       </BrowserRouter>
    
//   )
// }

// export default App


// new code 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import AboutUs from "./Pages/AboutUs";
import Contacts from "./Pages/Contacts";
import Details from "./Pages/Details";
import Footer from "./Pages/Footer";
import SubjectComparison from "./Pages/SubjectComparison";
import AdmissionTest from "./Pages/AdmissionTest";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Apply background color to a wrapper div */}
        <main
          className="flex grow container mx-auto p-6 justify-center "
          style={{
            background: "linear-gradient(to right top, #FDF0D5, #E5C1F2)",
          }}
        >
          <div className="w-full"> {/* Ensure it covers full width */}
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/admissionTest" element={<AdmissionTest />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="/details/:universityId" element={<Details />} />
              <Route path="/subjectComparison" element={<SubjectComparison />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
