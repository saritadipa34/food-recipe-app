import { Link } from "react-router-dom";
import Button from "./Button";

const Card=({itemName,itemImage,item})=>{
  console.log(item)
    return(
        <div className="h-[270px] w-[250px] bg-amber-100 border flex flex-col items-center">
            <div className="w-full">
<img className="h-[170px] w-full" src={itemImage} alt="image"/>
</div>
<p className="text-center my-4 font-bold">{itemName}</p>
<Link to="/recipe" state={item} >  <Button  className={"rounded-lg"} text={"Recipe"} /> </Link>
        </div>
    )
}
export default Card;