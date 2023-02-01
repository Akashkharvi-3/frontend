import  {useState} from 'react'
let App=()=>{
  const [todoList,seTtodoList]=useState([])//button
  
  const [newTask,setNewTask]=useState("")//input
  const handleChange=(event)=>{
    setNewTask(event.target.value)
  }
  const addTask=()=>{
   
    seTtodoList([...todoList,newTask])
  }
  function deleteTask(id) {
    const removeItem = todoList.filter((task) => {
      return task.id !== id;
    });
    seTtodoList(removeItem);
  }

  return (
<div className='container mt-5'>
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>    <button onClick={addTask}>ADD TASK BUTTON</button>
      </div>
      <div className='list'>
        {
          
          todoList.map((task)=>{
            return <div>
              <ul key={task.id}></ul>
             
              <h1>{task}</h1>
              <button onClick={()=>deleteTask(addTask)}>X</button>
              </div>
          })
        }
      </div>
   
      </div>
    </div>
  
  )


}
export  default App