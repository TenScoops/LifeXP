import FilterMenu from "./FilterMenu";
import Questcard from "./Questcard";

// import { CiDumbbell } from "react-icons/ci";
import { Fitness, Personal, Work } from "../../Icons";

const AvailableQuests = () => {

    const quests = {
        "Daily Quest": {
            Icon: (<Fitness width={"45"} height={"45"} />),
            Description: "Run 1 mile",
            Exp: "300XP",
            Coins: "100"
        },
        "Work": {
            Icon: (<Work width={"45"} height={"45"} />),
            Description: "Complete a work task",
            Exp: "200XP",
            Coins: "35"
        },
        "Personal": {
            Icon: (<Personal width={"45"} height={"45"} />),
            Description: "Meditate 15 minutes",
            Exp: "250XP",
            Coins: "60"
        },
        "Fitness": {
            Icon: (<Fitness width={"45"} height={"45"} />),
            Description: "Curl 20lb dumbbells",
            Exp: "210XP",
            Coins: "40"
        }
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
                        {Object.entries(quests).map(([QuestType, {Icon, Description, Exp, Coins}]) => (
                            <Questcard
                                key={QuestType}
                                QuestType={QuestType}
                                Icon={Icon}
                                Description={Description}
                                Exp={Exp}
                                Coins={Coins}
                            />
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AvailableQuests
