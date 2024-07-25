import { CiSquarePlus } from "react-icons/ci";
import { IoIosCheckbox } from "react-icons/io";

// import { FitnessIcon } from "../../../Icons";

import { useEffect, useRef, useState } from "react";


import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


// interface FitnessProps {
//     openPopup : boolean,
//     setOpenPopup : Dispatch<SetStateAction<boolean>>
// }

interface Task {
    id:number,
    label: string
}
const Work = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, label: 'Meeting' },
        { id: 2, label: 'Client Project' },])

    const [newTask, setNewTask] = useState<string>('')
    const [showInput, setShowInput] = useState<boolean>(false)
    const [completedTask, setCompletedTask] = useState<Set<number>>(new Set())

    const inputRef = useRef<HTMLInputElement>(null);


    const handleAddTask = () =>{
        if(newTask.trim() !== ''){
            setTasks([...tasks, {id: tasks.length + 1, label: newTask}])
            setNewTask('')
            setShowInput(false)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    const handleCheckboxClick = (taskId:number) =>{
        setCompletedTask(prev => {
            //set old state as new state(old set will be new set)
            const newCompletedTasks = new Set(prev)
            //if there is an id matching what was passed in
            if(newCompletedTasks.has(taskId)) {
                //delete task Id
                newCompletedTasks.delete(taskId)
            }else{
                //otherwise add new Id
                newCompletedTasks.add(taskId)
            }
            return newCompletedTasks
        })
    }

    const handleButtonClick = () =>{
        setTasks(prevTasks => {
            // Filter out completed tasks from the list of tasks
            const updatedTasks = prevTasks.filter(task => !completedTask.has(task.id));
            
            // Update the completed tasks set
            setCompletedTask(prevCompletedTasks => {
                // Create a new set to store remaining completed tasks
                const newCompletedTasks = new Set<number>();
                
                // Check which tasks are still in the updatedTasks list
                prevCompletedTasks.forEach(id => {
                    if (updatedTasks.some(task => task.id === id)) {
                        newCompletedTasks.add(id);
                    }
                });
                
                // Return the new set of completed tasks
                return newCompletedTasks;
            });
            
            // Return the updated list of tasks
            return updatedTasks;
        });
    }

    useEffect(() => {
        if (showInput && inputRef.current) {
            inputRef.current.focus();
        }
    }, [showInput]);
    
    return (<div className="  3xl:ml-16">
        <div className="flex justify-between ">
            {/* <div className="flex items-center mb-2"> */}
                <h1 className="text-normal mr-2 mb-2">Work</h1>
                {/* <FitnessIcon width="18" height="18"/> */}
            {/* </div> */}
            <Tippy
                delay={100}
                content="add a task">
                <button onClick={()=>{setShowInput(!showInput)}}>
                    <CiSquarePlus size={25} className="icon-hover" />
                </button>
            </Tippy>
        </div>
        <div className="py-6 3xl:w-96 3xl:h-[600px] flex justify-between border custom-gray border-black shadow-sharp shadow-transition hover:shadow-sharp-xl icon-hover4 transition-transform duration-200 cursor-pointer" >
            
            
            <div className="ml-6 mb-5 space-y-4">
                {tasks.map((task) => (
                    <form key={task.id} className="flex items-center">
                        <input 
                            type="checkbox" 
                            name="category" 
                            id={`task-${task.id}`}
                            onChange={()=>{handleCheckboxClick(task.id)}} 
                            className="custom-checkbox form-radio h-5 w-5 rounded-none text-gray-600" />
                        <label htmlFor={`task-${task.id}`} className={`ml-2 text-sm ${completedTask.has(task.id) && 'line-through'}`}>{task.label}</label>
                    </form>
                    ))}
                {showInput&&<div>
                        <input type="text"
                            onChange={(e)=>{setNewTask(e.target.value)}} 
                            onKeyDown={handleKeyDown}
                            placeholder="Enter a new task"
                            className=" p-1"
                            ref={inputRef}
                            />
                            
                            {/* <button onClick={handleAddTask}>add</button> */}
                    </div>}
                    {tasks.length === 0 && <h1 className="text-gray-400">No tasks yet</h1>}
            </div>
            <div className=" flex items-end mr-2"
                onClick={handleButtonClick}>
                   {completedTask.size >0 && <h1> +{completedTask.size * 25} XP</h1>}
               {completedTask.size > 0 && <button><IoIosCheckbox className="hover:text-gray-700" size={30} /></button>}
            </div>
        </div>
    </div>)
}

// Fitness.propTypes = {
//     openPopup:PropTypes.bool.isRequired,
//     setOpenPopup: PropTypes.func.isRequired
// }

export default Work

