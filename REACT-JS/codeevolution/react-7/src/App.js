/* import React from "react"
import Navbar from "./Navbar/Navbar"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Addcontact from "./Component/Contacts/Addcontact/Addcontact"
import Contactlist from "./Component/Contacts/Contactlist/Contactlist"
import Viewcontact from "./Component/Contacts/Viewcontact/Viewcontact"

import Editcontact from "./Component/Contacts/Editcontact/Editcontact"
import { Navigate } from "react-router-dom"

let App=()=>{
    return(
        <>
       
       
        <Router>
        <Navbar/>

<Routes>
 <Route path={"/"} element={<Navigate to={'/contacts/list'}/>}/>
 <Route path="/contacts/add" element={<Addcontact/>}/>
 <Route path="/contacts/list" element={<Contactlist/>}/>

 <Route path="/contacts/edit" element={<Editcontact/>}/>
 <Route path="/contacts/view" element={<Viewcontact/>}/>
 </Routes>
 </Router>
       

       
        
        

        </>
    )
}
export default App */