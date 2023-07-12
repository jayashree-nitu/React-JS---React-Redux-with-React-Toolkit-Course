import  {useSelector } from "react-redux";



function Coin() {
  const count=useSelector((state)=>state.counter.count)
  const themeTextCoor=useSelector((state)=>state.theme.color)

  return (
    <div>
      <span className="value" style={{color:themeTextCoor}}>Coin:{count}</span>
    </div>
  );
}

export default Coin;
