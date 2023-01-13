import React, { Component } from "react";
import employees from './data'
class Employees extends Component{
    render(){
        return(
            <div>
                <pre>{JSON.stringify(employees)}</pre>
                <div className="container mt-5">
                <div className='row'>
            <div className='col-md-8'>
                <table className="table table-hover">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th> Id </th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Gender</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        employees.map((employee)=>{
                            return <tr key={employee}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.last_name}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.email}</td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
           
                 
                       
                    </div>
                 
         
            
            </div>
            </div>
            </div>
        )
    }
}
export default Employees