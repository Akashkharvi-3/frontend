import React from 'react'
class CompB extends React.Component{

    render(){
        return <div>
<h2>hai this is new mesage from compB</h2>
<pre>{JSON.stringify(this.props)}</pre>
        </div>
    }
}
export default CompB