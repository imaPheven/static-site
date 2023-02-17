import React from "react";

import 'bootstrap-icons/font/bootstrap-icons.css';

import "./App.scss"
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCat, faDog, faBugs } from '@fortawesome/free-solid-svg-icons'


// We import all the components we need in our app
import MyNavbar from "./components/navbar";
import Home from "./components/home";

import SampleForm from "./components/sample/form";
import SampleColors from "./components/sample/colors";


const App = () => {
 return (
   <div className="px-4 px-xxl-2 container-xxl">
     <MyNavbar />
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/sample/form" element={<SampleForm />} />
       <Route path="/sample/colors" element={<SampleColors />} />
     </Routes>
   </div>
 );
};
// library.add(faCat, faDog, faBugs)
export default App;