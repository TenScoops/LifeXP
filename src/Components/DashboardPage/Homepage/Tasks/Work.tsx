import { CiSquarePlus } from "react-icons/ci";
// import { WorkIcon } from "../../../Icons";

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Work = () => {
    return(<div className=" 3xl:ml-16">   
    <div className="flex justify-between ">
        {/* <div className="flex items-center "> */}
            <h1 className="text-normal mr-2 mb-2">Work</h1>
            {/* <WorkIcon width="18" height="18"/>  */}
        {/* </div> */}
        <Tippy 
            delay={100}
            content="add a task">
            <button>
                <CiSquarePlus size={25} className="icon-hover"/>
            </button>
        </Tippy>
    </div>
    <div className=" h-40 3xl:w-96 3xl:h-[600px] flex justify-between border custom-gray border-black shadow-sharp shadow-transition hover:shadow-sharp-xl icon-hover4 transition-transform duration-200 cursor-pointer">
        <div className="ml-6 mt-6 space-y-4">
            <form className="flex items-center">
                <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-gray-600" />
                <label htmlFor="fitness" className="ml-2 text-sm">Meeting</label>
            </form>
            <form className="flex items-center">
                <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-black-600" />
                <label htmlFor="fitness" className="ml-2 text-sm">Client project</label>
            </form>
          
        </div>
    </div>
</div>)
}
export default Work