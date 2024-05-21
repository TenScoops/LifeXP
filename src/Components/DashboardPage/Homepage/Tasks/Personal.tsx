import { CiSquarePlus } from "react-icons/ci";
import { PersonalIcon } from "../../../Icons";

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Personal = () => {
    return (<div className="w-10/12 lg:ml-16">
        <div className="flex justify-between lg:w-10/12">
            <div className="flex justify-center mb-2 items-center">
                <h1 className="text-normal mr-2">Personal</h1>
                <PersonalIcon width="18" height="18"/>
            </div>
            <Tippy
                delay={800}
                content="add a task">
                <button>
                    <CiSquarePlus size={25} className="icon-hover" />
                </button>
            </Tippy>
        </div>
        <div className=" h-32 w-96  flex justify-between md:h-[600px] border custom-gray border-black shadow-sharp shadow-transition hover:shadow-sharp-xl icon-hover4 transition-transform duration-200 cursor-pointer">
            <div className="ml-6 mt-6 space-y-4">
                <form className="flex items-center">
                    <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-gray-600" />
                    <label htmlFor="fitness" className="ml-2 text-sm">Affirmations</label>
                </form>
                <form className="flex items-center">
                    <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-black-600" />
                    <label htmlFor="fitness" className="ml-2 text-sm">Cooking</label>
                </form>
                <form className="flex items-center">
                    <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-gray-600 rounded-none" />
                    <label htmlFor="fitness" className="ml-2 text-sm">Journaling</label>
                </form>
            </div>
        </div>
    </div>)
}

export default Personal
