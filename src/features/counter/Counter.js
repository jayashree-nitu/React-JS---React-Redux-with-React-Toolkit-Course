import  {useSelector,useDispatch} from "react-redux"
import { increment,decrement,incrementByAmount } from "./counterSlice"

function Counter () {
const count=useSelector((state)=>state.counter.count)
const themeTextCoor=useSelector((state)=>state.theme.color)

const dispatch=useDispatch()


return (
    <div>
        <button className='button' aria-label="Increment value" 
      onClick={()=>{dispatch(increment())}}>+</button>

      <span className="value" style={{color:themeTextCoor}}>count:{count}</span>

      <button className='button' aria-label="Decrement value" 
      onClick={()=>{dispatch(decrement())}}>-</button>
      
      <button className='button'   
      onClick={()=>{dispatch(incrementByAmount(10))}}>increment by 10</button>
      
    </div>
  )
}

export default Counter