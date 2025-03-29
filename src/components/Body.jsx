import { useEffect, useState } from "react";
import Card from "./Card";

const Body=()=>{
    const [fetchData,setFetchData]=useState([]);
const [searchValue,setSearchValue]=useState("");

    useEffect(()=>{
        const getData=async()=>{
            try{
            const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
            const data= await response.json();
            setFetchData(data.meals);
            console.log(data.meals);
        } catch (error){
console.log(error)
        }
    }
        getData();
    },[])

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