import React, { useState } from 'react'

export default function Main() {

    const[taskname, settaskname]=useState('');
    const[tasklist, settasklist]=useState([]);

const addtask = () => {
    return (settasklist([...tasklist, taskname]))
}


let tasklistcontent = tasklist.map((task, index)=>{
    return(
    <div>
        <li key={index}>
        {task}
        </li>
        <i className="far fa-trash-alt" onClick={()=>deletetask(index)}></i>
    </div>
    )
})


const deletetask = (index) => {
    let duparray = [...tasklist];
    duparray.splice(index, 1);
    settasklist(duparray);
}




return (
    <div>
        <div className="row justify-content-center">
            <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
                <h1>to do list</h1>
                <input
                type="text"
                placeholder='enter task'
                className='form-control'
                value={taskname}
                onChange={(e)=>{settaskname(e.target.value)}}
                />
                <button
                className='btn btn-success'
                onClick={addtask}
                > ADD
                </button>
                <ul>
                {tasklistcontent}
                </ul>


            </div>
        </div>

    </div>
  )



}
