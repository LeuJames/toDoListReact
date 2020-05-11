import React from 'react';
    
const Display = (props) => {
    const taskList = props.tasks;

    const handleCheck = (i) => {
        props.onCheck(i);
    }

    const handleDelete = (e, i) => {
        e.preventDefault();
        props.onDelete(i);
        }



    return (
        <>
            <h1>Current tasks</h1>
            <ul>
                {
                    taskList.map((task, i) =>
                    <li key={i} style= { task[1] === true ? {textDecoration: 'line-through'} : null}> 
                        {task[0]}
                        <input type="checkbox" checked={task[1]} onClick={ () => handleCheck(i)}/>
                        <button type="submit" onClick={ (e) => handleDelete(e, i)}>Delete</button>
                    </li>
                    )
                }
            </ul>

        </>
    );
};
    
export default Display;