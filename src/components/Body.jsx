
import { useContext } from "react";
import Card from "./Card";
import { CardContext } from "../context/CardContext";

const Body=()=>{
    const {fetchData}=useContext(CardContext);
console.log(fetchData) 
    const displayItems=fetchData.slice(0,24);

    return(
        <div className="flex gap-6 flex-wrap mt-10">
{
    displayItems.map((item,i)=>{
        return <Card 
        itemName={item.strMeal}
        itemImage={item.strMealThumb}
        key={i}  />
    })
}

        </div>
    )
}
export default Body;