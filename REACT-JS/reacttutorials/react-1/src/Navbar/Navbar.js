import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <React.Fragment>
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to="/home" className='navbar-brand'>React user comp</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link to="/counter" className='nav-link'>Message with redux</Link></li>
                  <li className='nav-item'>
              
              
                  
                  </li>
            </ul>
        </div>
    </nav>

    
    
    
    </React.Fragment>

      

  )
}

export default Navbar
