import React, { useState } from 'react'

export default function Main() {

    const[taskname, settaskname]=useState('');
    const[tasklist, settasklist]=useState([]);

// console.log(taskname);

function addtask () {
console.log(taskname);
    settasklist([...tasklist, taskname])
}

function deletetask(index){
    console.log(index);
}

const tasklistcontent = tasklist.map((task, index)=>{
    return(
        <div>
            <br />
            {task}
            <i class="fa fa-trash-alt" onClick={deletetask(index)}></i>
         </div>
    )
})


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
                >
                    ADD
                </button>
                <p>
                {tasklistcontent}
                </p>


            </div>
        </div>

    </div>
  )
}
