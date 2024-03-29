import {CiSquarePlus} from "react-icons/ci";
import {IoIosCheckbox} from "react-icons/io";

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Fitness = () => {
    return (<div className="w-10/12 lg:ml-28">
        <div className="flex justify-between lg:w-10/12">
            <h1 className="text-normal mb-2">Fitness</h1>
            <Tippy
                delay={800}
                content="add a task">
                <button>
                    <CiSquarePlus size={25} className="icon-hover" />
                </button>
            </Tippy>
        </div>
        <div className="lg:w-10/12 flex justify-between h-32 border custom-gray border-black shadow-sharp shadow-transition hover:shadow-sharp-xl icon-hover4 transition-transform duration-200 cursor-pointer" >
            <div className="ml-6 mt-4 space-y-4">
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
export default Fitness
