import React from 'react';
import "./navbar.css";

function Navbar(props) {
   return (
      <div>


         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" >
               <ul className="navbar-nav mr-auto" id="navigationItems">
                  <li className="nav-item">
                     <a className="nav-link" onClick={props.handleClick} id="technology" href="#">Technology</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" onClick={props.handleClick} id="sports" href="#">Sports</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" onClick={props.handleClick} id="science" href="#">Science</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" onClick={props.handleClick} id="finance" href="#">Finance</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" onClick={props.handleClick} id="health" href="#">Health</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" onClick={props.handleClick} id="business" href="#">Business</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" onClick={props.handleClick} id="entertainment" href="#">Entertainment</a>
                  </li>
               </ul>


            </div>
         </nav>
      </div>

   )
}

export default Navbar;