import { useState } from "react";
import FilterMenu from "./FilterMenu";
import Questcard from "./Questcard";

import { Scroll } from "../../Icons";
// import { MdCheck } from "react-icons/md";

// import { CiDumbbell } from "react-icons/ci";
import { FitnessIcon, PersonalIcon, WorkIcon } from "../../Icons";
import Notification from "../../Notification/Notification";

const AvailableQuests = () => {
    const [questAccepted, setQuestAccepted] = useState<number[]>([]) 
    const [accepted, setAccepted] = useState<boolean>(false)

    const quests = [
         {
            id: 1,
            QuestType: "Daily Quest",
            Icon: (<FitnessIcon width={"45"} height={"45"} />),
            Description: "Run 1 mile",
            Exp: "300XP",
            Coins: "100"
        },
        {
            id: 2,
            QuestType: "Work",
            Icon: (<WorkIcon width={"45"} height={"45"} />),
            Description: "Complete a work task",
            Exp: "200XP",
            Coins: "35"
        },
        {
            id: 3,
            QuestType: "Personal",
            Icon: (<PersonalIcon width={"45"} height={"45"} />),
            Description: "Meditate 15 minutes",
            Exp: "250XP",
            Coins: "60"
        },
        {
            id: 4,
            QuestType: "Fitness",
            Icon: (<FitnessIcon width={"45"} height={"45"} />),
            Description: "Curl 20lb dumbbells",
            Exp: "210XP",
            Coins: "40"
        }
    ]

    const scroll = (): React.ReactNode => {
        return <div className="mb-10">
            <Scroll />
        </div>
    }
    const handleAccept = (id:number) =>{
        setQuestAccepted([...questAccepted, id])
        setAccepted(true)
    }

    return (
        <div className=" md:flex md:justify-center h-screen">
            <div className=" md:w-full md:border-t-[1.2px] md:border-black md:mt-20 ">
                <div className="flex flex-col items-center">
                    {/* header and options */}
                    <div className="relative w-full flex flex-row justify-between mt-14">
                        <div className="mb-12 ml-8 border border-b-2 w-32 border-black">
                            <h1 className="tracking-wider pl-4">My Quests</h1>
                        </div>

                        <FilterMenu />
                    </div>
                    {/* quest cards */}
                    <div className="grid  xl:grid-cols-4 lmd:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-0 ">
                        {quests.map((card, index) => (
                            !questAccepted.includes(card.id) &&
                            <Questcard
                                key={index}
                                id={card.id}
                                QuestType={card.QuestType}
                                Icon={card.Icon}
                                Description={card.Description}
                                Exp={card.Exp}
                                Coins={card.Coins}
                                handleAccept={handleAccept}
                            />
                        ))}
                    </div>
                    {questAccepted.length === 4 && <div className="flex flex-col justify-center">
                        {/* No quests display */}
                        <div className="flex items-center justify-center w-[240px] mb-2 ml-2 mt-10">
                            {scroll()}
                        </div>
                        <h1 className="ml-10"> No quests available. </h1>
                    </div>}
                </div>

            </div>
            {accepted && <Notification setAccepted={setAccepted}/>}
            {/* Notification */}
            {/* <div className="absolute flex flex-row items-center justify-center  border space-x-2 border-black rounded-md top-[100px] w-48 h-10">
                <div className="flex flex-row items-center">
                    <h1 className="text-sm mr-1">+35</h1>
                    <MdCheck size={21}/>
                </div>
               
                <h1 className="text-sm">Quest Accepted</h1>
            </div> */}
        </div>
    )
}

export default AvailableQuests
