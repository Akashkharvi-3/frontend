import React, { Component } from "react";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import Axios from "axios";

class ContactApp extends Component{
    constructor(props){
        super(props);
        this.state={ 
            contacts:[]
        }
    }
    componentDidMount(){
        let url="https://jsonplaceholder.typicode.com/users"
        Axios.get(url).then((response)=>{
            this.setState({contacts:response.data})
         }).catch(()=>{})
    }
    render(){
        return (

            <div className="container">
                <div className="row">
                    <pre>{JSON.stringify(this.state.contacts)}</pre>
                <div className="col-md-8">{
                    this.state.contacts.length>0?
                    <> 
                    <ContactList contacts={this.state.contacts}/>
                    </>:null
    }
                   
                
                
                    
                         </div>
                    <div className="col-md-4">
                        <ContactDetails/>
                        </div>

                  
                </div>

            </div>


           
        
        )
    }
}
export default ContactApp