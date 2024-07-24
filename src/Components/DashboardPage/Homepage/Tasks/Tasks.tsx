import { WiStars } from "react-icons/wi";

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional for styling

import { Dispatch, SetStateAction } from "react";

import PropTypes from 'prop-types';

import Fitness from "./Fitness";
import Personal from "./Personal";
import Work from "./Work";

// import { PiCoins } from "react-icons/pi";

// import Notifications from "../../../Notification/Notification";


interface TasksProps {
    setThePage: Dispatch<SetStateAction<string>>
}

const Tasks: React.FC<TasksProps> = ({setThePage}) => {

    // const[openPopup, setOpenPopup] = useState<boolean>(false)

    const css = {
        "xpdiv": "lg2:hidden ml-0 flex items-center justify-center h-11 w-11 border-1" +
            "bg-slate-50 border-black shadow-sharp-sm cursor-pointer icon-hover4" +
            "transition-transform duration-200 hover:shadow-sharp-md"
    }
    return (
        <div className="flex flex-col lg1:border-l md:border-t lg1:rounded-l-md md:border-black w-full lg2:w-9/12 items-center space-y-6 relative">
            
            <div className="flex flex-row mt-20 md:mt-14 items-center w-10/12 md:w-9/12">
                <Tippy
                    content="XP Tracker"
                    delay={700}>
                    <div
                        onClick={() => {setThePage("Trackers")}}
                        className={css.xpdiv}>
                        <h1 className="tracking-wide">
                            XP
                        </h1>
                    </div>
                </Tippy>
                <div className="flex items-center ml-6 ">
                    <WiStars size={30} />
                    <h1 className="text-lg underline mb-1 ">Your Tasks</h1>
                </div>

            </div>

            <div className="w-10/12 md:w-9/12 3xl:w-auto grid grid-cols-1 gap-4 3xl:grid-cols-3 3xl:gap-0 ">
                {/* Fitness */}
                <Fitness />

                {/* Work */}
                <Work />

                {/* Personal */}
                <Personal />
            </div>
            
            {/* {openPopup&&<Popup />} */}

            {/* Notification */}
            {/* <div className="flex flex-row items-center justify-center absolute border space-x-2 border-black rounded-md top-0 w-48 h-10">
                <div className="flex flex-row items-center">
                    <h1 className="text-sm mr-1">+35</h1>
                    <PiCoins size={21}/>
                </div>
               
                <h1 className="text-sm">Checking in</h1>
            </div> */}
            {/* <Notifications /> */}
        </div>
    )
}

Tasks.propTypes = {
    setThePage: PropTypes.func.isRequired
}

export default Tasks
