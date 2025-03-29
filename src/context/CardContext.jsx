import { createContext, useState,useEffect } from "react";

export const CardContext=createContext();

export const CardContextProvider=({children})=>{
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

    return(
<CardContext.Provider value={{fetchData,setFetchData}}>
    {children}
</CardContext.Provider>
    )
};
