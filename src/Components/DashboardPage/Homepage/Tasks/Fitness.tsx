import { CiSquarePlus } from "react-icons/ci";
import { IoIosCheckbox } from "react-icons/io";

// import { FitnessIcon } from "../../../Icons";

import { Dispatch, SetStateAction } from "react";

import PropTypes from 'prop-types';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


interface FitnessProps {
    openPopup : boolean,
    setOpenPopup : Dispatch<SetStateAction<boolean>>
}

const Fitness : React.FC<FitnessProps> = ({openPopup,setOpenPopup}) => {
    return (<div className="  3xl:ml-16">
        <div className="flex justify-between ">
            {/* <div className="flex items-center mb-2"> */}
                <h1 className="text-normal mr-2 mb-2">Fitness</h1>
                {/* <FitnessIcon width="18" height="18"/> */}
            {/* </div> */}
            <Tippy
                delay={100}
                content="add a task">
                <button onClick={()=>{setOpenPopup(!openPopup)}}>
                    <CiSquarePlus size={25} className="icon-hover" />
                </button>
            </Tippy>
        </div>
        <div className="h-40 3xl:w-96 3xl:h-[600px] flex justify-between border custom-gray border-black shadow-sharp shadow-transition hover:shadow-sharp-xl icon-hover4 transition-transform duration-200 cursor-pointer" >
            <div className="ml-6 mt-6 space-y-4">
                <form className="flex items-center">
                    <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 rounded-none text-gray-600" />
                    <label htmlFor="fitness" className="ml-2 text-sm">Deadlift</label>
                </form>
                <form className="flex items-center">
                    <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-black-600" />
                    <label htmlFor="fitness" className="ml-2 text-sm">Curl 20lb dumbbells</label>
                </form>
                <form className="flex items-center">
                    <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-gray-600" />
                    <label htmlFor="fitness" className="ml-2 text-sm">Cardio for 20 minutes</label>

                </form>
            </div>
            <div className=" flex items-end mr-2">
                <IoIosCheckbox className="hover:text-gray-700" size={30} />
            </div>
        </div>
    </div>)
}

Fitness.propTypes = {
    openPopup:PropTypes.bool.isRequired,
    setOpenPopup: PropTypes.func.isRequired
}

export default Fitness

