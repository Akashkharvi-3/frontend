import React,{Component} from 'react'
class Clock extends Component{
    constructor(props){
        super(props)
        console.log("constuctor method is will execute automatically")
        this.state={
            currentTime:new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
        console.log("component did mount method will execute")
        setInterval(()=>{
            this.setState({currentTime:new Date().toLocaleTimeString()
        })
    },1000)}


    render(){
        console.log("render method wil execute")
        
        return (
            <div className="container mt-5"><div className='row'>
            <div className='col-md-6'>
                <div className='card'>
                    <div className='card-header bg-primary text-white'>
                        <h3>Time:{this.state.currentTime}</h3>
                    </div>
                    <div className='card-body'>
                </div>
            </div>
            </div>
            </div>
            </div>)
        }
}

export default Clock