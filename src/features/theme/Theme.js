import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeTextColor } from "./themeSlice";

function Theme  ()  {
    const[color,setColor]=useState("white")
 const dispatch=useDispatch();
    return (
    <div>
        <input className="textbox" type="text" onChange={(e)=>setColor(e.target.value)}/>
        <button className="button" onClick={()=>{dispatch(changeTextColor(color))}}>ChangeText Text Color</button>
        <h1>{color}</h1>
    </div>
  )
}

export default Theme