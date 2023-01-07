import React from 'react'
import Employee from '../props/Employee'

class User extends React.Component
{
    employee_list=[{name:"akash",id:101,sal:40000},
    {id:102,name:"khr",sal:50000}]

    render(){
        return <div>
            <h1>React user componen</h1>
            <hr/>
        <Employee emp_list={this.employee_list}/>
            </div>
          
    }


}
export default User

