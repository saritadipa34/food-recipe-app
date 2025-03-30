
import { useContext } from "react";
import Card from "./Card";
import { useEffect } from "react";
import { CardContext } from "../context/CardContext";

const Body=()=>{
    const {fetchData,isLoading,isError,filteredData,notFound,setNotFound}=useContext(CardContext);
   console.log(fetchData);


useEffect(()=>{
    if(filteredData && filteredData.length === 0){
setNotFound(true)
    } else {
        setNotFound(false)
        }},[filteredData,setNotFound])

if(isLoading) return <div className="text-center font-bold text-4xl">Loading........</div>;
if(isError) return <div className="text-center font-bold text-4xl text-red-600"> Error in Fetching Data</div>

    return(
<>

{notFound && <div className="text-center  text-l ">No Data Found</div>}

        <div className="flex gap-6 flex-wrap mt-2">
{
   filteredData.length > 0 ? (
    filteredData.map((item) => {
      return  <Card
        itemName={item.strMeal}
        itemImage={item.strMealThumb}
        key={item.idMeal} 
      />
})
  ) :(
      fetchData.map((item) => (
        <Card 
         
          itemName={item.strMeal}
          itemImage={item.strMealThumb}
          key={item.idMeal}
          item={item}
        />
      ))
  )
}
        </div>
        </>
    )
}
export default Body;