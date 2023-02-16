/* 
const CompB = (props) => {
  return (
    <div>
      <h1>comp bb</h1>
      <pre>{JSON.stringify(props)}</pre> 
      <h1>full name:{props.place}</h1>
      
    </div>
  )
}

export default CompB */
const CompB=(props)=>{
  return(
    <div>
<pre>{JSON.stringify(props)}</pre>
<h1>full name:{props.two}</h1>
    </div>
  )
}
export default CompB

