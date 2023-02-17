import React from "react";
 import "../App.scss"


import { NavLink } from "react-router-dom";
 
export default function MyNavbar() {
 return (
     <header className="navbar navbar-expand-lg sticky-top bd-navbar bg-body">
      <div className="container-fluid">
       <NavLink className="navbar-brand" to="/">
        <div className="vstack  ms-auto robot love">
          <div>
            <i class="bi bi-robot fs-1 text-primary"></i>&nbsp;&nbsp;
            <i class="bi bi-heart fs-2 text-secondary"></i>
          </div>
          <div className="gap-neg-1 lh-1">
            <span class="fs-6 text-secondary">Robot </span>
            <span class="fs-6 text-primary">Love</span>
          </div>
        </div>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <i class="bi bi-list text-primary fs-1"></i>
       </button>
       
       </div>
     </header>
 );
}