
import { useContext } from "react";
import Card from "./Card";
import { CardContext } from "../context/CardContext";

const Body=()=>{
    const {fetchData,isLoading,isError}=useContext(CardContext);
console.log(fetchData);

if(isLoading) return <div className="text-center font-bold text-4xl">Loading........</div>;
if(isError) return <div className="text-center font-bold text-4xl text-red-600"> Error in Fetching Data</div>

    return(
        <div className="flex gap-6 flex-wrap mt-10">

{ fetchData.map((item,i)=>{
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