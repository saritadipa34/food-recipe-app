
import { useContext } from "react";
import Card from "./Card";
import { useEffect } from "react";
import { CardContext } from "../context/CardContext";

const Body=()=>{
    const {fetchData,isLoading,isError,filteredData,notFound,setNotFound}=useContext(CardContext);
console.log(fetchData);

if(isLoading) return <div className="text-center font-bold text-4xl">Loading........</div>;
if(isError) return <div className="text-center font-bold text-4xl text-red-600"> Error in Fetching Data</div>

useEffect(()=>{
    if(filteredData.length === 0 && filteredData){
setNotFound(true)
    } else{
        setNotFound(false)
    }
},[filteredData,setNotFound])

    return(
<>
       {notFound && <p className="text-center text-sm mt-4">Not Found</p>}    

        <div className="flex gap-6 flex-wrap mt-5">
{
  filteredData && filteredData.length > 0 ? (
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
        />
      ))
  )
}
        </div>
        </>
    )
}
export default Body;