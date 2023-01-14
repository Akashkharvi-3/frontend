import React from "react";
import {Link} from 'react-router-dom' 
class Navbar extends React.Component{
render(){
return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
     <Link to="/Home" className="nav-link">React examples</Link>
    <div className="ml-auto"> {/* for right side */}
        <ul className="navbar-nav">{/*use for single line*/}
            <li >
                <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li className="nav-list">
                <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-list">
                <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            
        </ul>
    </div>
</nav>
}}
export default NavbarclassName="nav-list"