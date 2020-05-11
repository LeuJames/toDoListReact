import React, { useState } from 'react';
import Form from './Components/Form';
import Display from './Components/Display';
    
    
function App() {
    const [tasks, setTasks] = useState([['Get Python Black Belt', false]]);
    
    const newTask = (task) => {
        setTasks ([...tasks, [task, false]]);
    }

    const checkTask = (i) => {
        let tempTasks = [...tasks];
        if (tempTasks[i][1] === false) {
            tempTasks[i][1] = true;
        }
        else {
            tempTasks[i][1] = false;
        }
        setTasks(tempTasks);
    }

    const deleteTask = (i) => {
        let tempTasks = [...tasks];
        tempTasks.splice(i,1);
        setTasks(tempTasks)
    }

    return (
        <>
            <Form onNewTask={newTask}/>
            <Display onDelete={deleteTask} onCheck={checkTask} tasks={ tasks }  />
        </>
    );
}
    
export default App;