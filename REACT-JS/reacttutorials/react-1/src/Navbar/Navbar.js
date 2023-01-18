import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/index" className="navbar-brand">React Hooks example</Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link to="/usestate" className="nav-link">Use state Ex</Link>
                        
                        <Link to="/Counter" className="nav-link ">Product</Link>
                    </li>
                </ul>
            </div>
            </nav>
        )
    }
}
export default Navbar