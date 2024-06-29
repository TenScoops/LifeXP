import { Dispatch, SetStateAction, useRef, useState } from "react";

import { FireIcon, FitnessIcon, PersonalIcon, WorkIcon } from "../../../Icons";


import PropTypes from 'prop-types';

import Tippy from "@tippyjs/react";
import { BsListTask } from 'react-icons/bs';
import { PiDotsThreeLight } from "react-icons/pi";
// import Streakcalendar from '../../assets/Streakcalendar.png'

import { useOutsideClick } from '../../../../Hooks/index';



interface TrackingProps {
    setThePage: Dispatch<SetStateAction<string>>
}

const Tracking: React.FC<TrackingProps> = ({setThePage}) => {


    const questOptionsRef: React.MutableRefObject<null> = useRef(null)
    useOutsideClick({ref: questOptionsRef, callback: () => {setOpenMenuIndex(null)}})

    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null)
    const [hiddenQuests, setHiddenQuests] = useState<number[]>([])
    
    
    const DropDown = ({id}:{id:number} ) => {
        return (
            <div 
                ref={questOptionsRef}
                className="h-20 w-36 border bg-white border-black border-b-2 absolute right-5 space-y-2 ">
                <h1 onClick={()=>{handleUntrackAndComplete(id)}} className="hover:bg-gray-200 px-2 py-1">Untrack</h1>
                <h1 onClick={()=>{handleUntrackAndComplete(id)}} className="hover:bg-gray-200 px-2 py-1">Mark complete</h1>
            </div>
        );
    };
    const handleUntrackAndComplete = (id:number) =>{
        setHiddenQuests([...hiddenQuests, id]) // Add the quest ID to the list of hidden quests
        setOpenMenuIndex(null); // Close the dropdown after untracking
    }
    const handleMenuClick = (index: number) => {
        setOpenMenuIndex(openMenuIndex === index ? null : index); // checks if the dropdown menu for the current item should be open
    };

    const questItems = [
        { id: 1, icon: FitnessIcon, label: 'Complete 1 mile' },
        { id: 2, icon: WorkIcon, label: 'Complete a work task' },
        { id: 3, icon: PersonalIcon, label: 'Meditate 15 minutes' },
        { id: 4, icon: FitnessIcon, label: 'Curls for 5 reps' }
    
    ];

    const styles = {
        "quests": "space-y-3 text-sm flex flex-col items-center",
        "hoverBase": "relative bottom-14 left-0 border-2 bg-white border-black w-80 h-24 rounded-md text-xs space-y-3 flex flex-col justify-center",
        "hover1": "w-44 h-4 border border-black mr-3 rounded-lg ml-2",
        "hover2": "bg-levelup-gray1 hover:bg-levelup-gray2 h-3 ml-[2px] mt-[1.2px] border border-black rounded-2xl",
        "pageButton": "absolute left-5 top-20 md:top-20 md:left-14 ml-0 bg-white flex items-center justify-center lg2:hidden h-11 w-11 border-1" +
            "bg-slate-50 border-black shadow-sharp-sm cursor-pointer icon-hover4" +
            "transition-transform duration-200 hover:shadow-sharp-md"
    }

    return (

        <div className="w-full border-t border-black flex-col md2:flex lg2:w-96 border-r rounded-r-md relative">
            <Tippy
                content="You're on a 1 day streak!"
                arrow={false}

            >
                <div className="hidden absolute top-0 left-0 lg:flex flex-row items-center h-8 w-11 space-x-2 border border-black">
                    <h2 className="text-md ml-1">1</h2>
                    <FireIcon width={"15"} height={"17"} />
                </div>
            </Tippy>
            <div className="flex flex-col items-center space-y-20 h-screen ">

                {/* change page button */}
                <Tippy
                    content="Tasks"
                    delay={700}>
                    <div onClick={() => {setThePage("Tasks")}}
                        className={styles.pageButton}>
                        <BsListTask size={25} />
                    </div>
                </Tippy>
                {/* Daily streak tracker */}
                {/* <div className="flex flex-col items-center text-sm"> */}

                {/* <img src={Streakcalendar} width={250} /> */}
                {/* </div> */}


                {/* Task tracker */}
                <div className={styles.quests}>
                    {/* Streak number */}

                    {/* Daily Quests */}
                    <h1 className="underline mb-2">Daily Tasks</h1>
                    <div>
                        <label className="mr-2">Complete all work tasks</label>
                        <input type="checkbox" className="mr-1"/>
                        <label>50 XP</label>
                    </div>

                    <div>
                        <label className="mr-2">Complete a quest</label>
                        <input type="checkbox" className="mr-1"/>
                        <label>50 XP</label>
                    </div>
                </div>
                {/* Tracked quests */}
                <div className="flex flex-col relative space-y-3 text-sm items-center lg:w-full">
                    <h1 className="underline mb-2">Tracked Quests</h1>
                    
                    {/* Quests */}
              
                    <div className="flex flex-col items-center relative w-full space-y-3">
                        {questItems.map((item, index) => (
                           !hiddenQuests.includes(item.id)&& (//render if id is not in hiddenquests array
                            <div key={item.id} className= "flex flex-row justify-between items-center cursor-pointer hover:border-2 hover:w-[282px] space-x-3 w-[278px] border border-black h-10 rounded-md ">
                                <span className="ml-2">
                                    <item.icon width={"28"} height={"28"} />
                                </span>
                                <p>{item.label}</p>
                                <button
                                    className="pr-2"
                                    onClick={() => {handleMenuClick(index)}}
                                >
                                    <PiDotsThreeLight size={25} />
                                </button>
                                {openMenuIndex === index && <DropDown id={item.id} />}
                            </div>
                        )))}
                        
                    </div>
                
            </div>
            {/* level up meter */}
            <div className="flex flex-col absolute bottom-0 items-center text-sm  mt-12">
                    {/* level and xp */}
                    <div className="mb-4 cursor-default">
                        <h1>Level: 5</h1>
                        <h1>XP: 400/500</h1>
                    </div>
                    {/* meter div */}
                    <div className="meterContainer w-72 h-9 mb-10 border border-black rounded-2xl cursor-pointer">
                        <div className="bg-levelup-gray1 hover:bg-levelup-gray2 w-48 h-7 mb-10 ml-[3px] mt-[3px] border border-black rounded-2xl">

                        </div>
                    </div>

                    {/* hover, level statistics div */}
                    <div className="absolute levelStatistics tracking-tight">
                        <div className={`${styles.hoverBase} `}>

                            <div className="flex flex-row">
                                <div className={styles.hover1}>
                                    <div className={`${styles.hover2} w-8`}>

                                    </div>
                                </div>
                                <h1>Level 1: Fitness</h1>
                            </div>

                            <div className="flex flex-row">
                                <div className={styles.hover1}>
                                    <div className={`${styles.hover2} w-28`}>

                                    </div>
                                </div>
                                <h1>Level 4: Work</h1>
                            </div>
                            <div className="flex flex-row">
                                <div className={styles.hover1}>
                                    <div className={`${styles.hover2} w-20`}>

                                    </div>
                                </div>
                                <h1>Level 2: Personal</h1>
                            </div>
                            </div>
                    </div>

            </div>
        </div>
    </div>
        
    )
}

Tracking.propTypes = {
    setThePage: PropTypes.func.isRequired
}

export default Tracking
