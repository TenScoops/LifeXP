const Popup = () => {

    const onSubmit = () => {
        return
    }

    return(
    <div className="border rounded-md border-black absolute
                 bottom-48 right-50 h-96 w-96 shadow-lg bg-white">
        
        <div className="flex flex-col ">
            {/* close button */}
            <div className="flex justify-end mr-3">
                <h1>X</h1>
            </div>
            <div className=" flex flex-col ">
                <div className="flex ml-8">
                    <h1>Task</h1>
                </div>
                
                <form className="flex justify-center">
                    <input onSubmit={onSubmit}
                        className="border rounded-lg border-black h-32 w-80"/>
                </form>
                
                <div className="ml-8">
                    <h1>Choose Tag</h1>
                    <h1>Difficulty</h1>
                </div>
            </div>
        </div>

    </div>)
}
export default Popup