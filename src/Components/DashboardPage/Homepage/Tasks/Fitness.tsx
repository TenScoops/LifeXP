import { CiSquarePlus } from "react-icons/ci";
import { IoIosCheckbox } from "react-icons/io";

// import { FitnessIcon } from "../../../Icons";

import { useState } from "react";


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
const Fitness = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, label: 'Deadlift' },
        { id: 2, label: 'Curl 20lb dumbbells' },
        { id: 3, label: 'Cardio for 20 minutes' }])

    const [newTask, setNewTask] = useState<string>('')
    const [showInput, setShowInput] = useState<boolean>(false)

    const handleAddTask = () =>{
        if(newTask.trim() !== ''){
            setTasks([...tasks, {id: tasks.length + 1, label: newTask}])
            setNewTask('')
            setShowInput(false)
        }
    }

    return (<div className="  3xl:ml-16">
        <div className="flex justify-between ">
            {/* <div className="flex items-center mb-2"> */}
                <h1 className="text-normal mr-2 mb-2">Fitness</h1>
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
        <div className="h-40 3xl:w-96 3xl:h-[600px] flex justify-between border custom-gray border-black shadow-sharp shadow-transition hover:shadow-sharp-xl icon-hover4 transition-transform duration-200 cursor-pointer" >
            
            
            <div className="ml-6 mt-6 space-y-4">
                {tasks.map((task) => (
                    <form key={task.id} className="flex items-center">
                        <input type="checkbox" name="category" id={`task-${task.id}`} className="custom-checkbox form-radio h-5 w-5 rounded-none text-gray-600" />
                        <label htmlFor={`task-${task.id}`} className="ml-2 text-sm">{task.label}</label>
                    </form>
                    ))}
                {showInput&&<div>
                        <input type="text"
                            onChange={(e)=>{setNewTask(e.target.value)}} 
                            placeholder="Enter new task"
                            className="border border-black p-1"/>
                            <button onClick={handleAddTask}>add</button>
                    </div>}
            </div>
            <div className=" flex items-end mr-2">
                <IoIosCheckbox className="hover:text-gray-700" size={30} />
            </div>
        </div>
    </div>)
}

// Fitness.propTypes = {
//     openPopup:PropTypes.bool.isRequired,
//     setOpenPopup: PropTypes.func.isRequired
// }

export default Fitness

