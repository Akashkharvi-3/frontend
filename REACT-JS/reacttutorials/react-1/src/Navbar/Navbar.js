import React from "react";
class Navbar extends React.Component{
render(){
return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <a className="nav-link" href="#">React examples</a>
    <div className="ml-auto">
        <ul className="navbar-nav">
            <li className="nav-list">
                <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-list">
                <a className="nav-link" href="#">about</a>
            </li>
            <li className="nav-list">
                <a className="nav-link" href="#">Contact</a>
            </li>
            
        </ul>
    </div>
</nav>
}}
export default Navbar