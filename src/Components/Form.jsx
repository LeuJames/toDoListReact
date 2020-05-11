import React, { useState } from 'react';
    
    
const Form = (props) => {
    const [task, setTask] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewTask(task);
        setTask('');
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>New Task:</h1>
            <input 
                type="text"
                placeholder="Enter your to-do item here"
                onChange={ (e) => setTask(e.target.value)} 
                value={ task }
            />
            <input type="submit" value="Create Task" />
        </form>
    );
};
    
export default Form;