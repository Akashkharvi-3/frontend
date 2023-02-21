import React from 'react'
import download from "../download.jpg";



const Navbar = () => { 
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark">
  <div className='container'>

  <a className="navbar-brand mr-auto" href="#"><img className='logo' src={download} alt="download..."/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>

  </button>
  

  <div clasNames="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#" >Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">How work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contacts</a>
      </li>


    </ul>
  </div>
  
  </div>
  <i class="fa fa-bars" aria-hidden="true"  style={{color:"#fff"}}  ></i>
</nav>
  )
}

export default Navbar
