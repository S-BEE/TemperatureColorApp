import { useState } from "react"

const hot = {
    backgroundColor:'green',
}
const cold = {
    backgroundColor:'blue',
}
const TempControlApp = ()=>{
    const [temp, setTemp]= useState(0)
    const [color, setColor] = useState(cold)
    function increase (){
        setTemp(temp+1)
        if (temp>15){
            setColor(hot)
        }
        else{
            setColor(cold)
        }
    }
    function decrease (){
        setTemp(temp-1)
        }
    

    return(
        <>
        <div className="h-screen flex items-center justify-center">
            <div className="w-[20rem] h-[30rem] bg-red-500 rounded-xl flex flex-col gap-10 items-center justify-center">
                <div className={`w-[15rem] h-[15rem] bg-${color}-500 text-8xl rounded-full flex items-center justify-center border border-white text-white `} >{temp}</div>
                <div className="flex gap-8">
                    <button className="w-[5rem] h-[5rem] rounded-full flex items-center justify-center bg-blue-400 text-white text-4xl" onClick={increase} >+</button>
                    <button className="w-[5rem] h-[5rem] rounded-full flex items-center justify-center bg-blue-400 text-white text-4xl " onClick={decrease} >-</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default TempControlApp