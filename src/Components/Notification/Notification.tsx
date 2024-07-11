import { useEffect, useState } from "react";
import { PiCoins } from "react-icons/pi";

const Notification = () =>{
    const [isVisible, setIsVisible] = useState<boolean>(true)

    useEffect(()=>{
        const timer = setTimeout(() => {
            setIsVisible(false);
          }, 2000); 

          return () => {clearTimeout(timer)}//cleanup
    }, []) //run once on component mount

    //dont run code below this conditional, if false
    // if(!isVisible) return null 

    return (
    <div className={`flex flex-row items-center justify-center absolute border space-x-2 border-black rounded-md top-0 w-48 h-10 fade ${!isVisible && 'hide'}`}>
        <div className="flex flex-row items-center">
            
            <PiCoins size={21}/>
            <h1 className="text-sm ">+35</h1>
        </div>
       
        <h1 className="text-sm">Checking in</h1>
    </div>)
}
export default Notification