import React from 'react'

class Employee extends React.Component{
    render(){
        return <div>
            <h1>Employee comp</h1>
            <pre>{JSON.stringify(this.props)}</pre>
            <h4>employee name:{this.props.emp_list[1].name}</h4>
            </div>
    }
}
 export default Employee

