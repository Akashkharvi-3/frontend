import React, { Component } from "react";

class ContactList extends Component{
    render(){
        return (
            <div>
                <h1>Contact list</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="table table-hover">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>email</th>
                                        <th>address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.contacts.map((contact)=>{
                                            return  <tr key={contact.name}>
                                                
                                                <td>{contact.id}</td>
                                                <td>{contact.name}</td>
                                                <td>{contact.email}</td>
                                                <td>{contact.address.city}</td>
                                            </tr>

                                        })
                                    }

                                </tbody>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>

           
        
        )
    }
}
export default ContactList