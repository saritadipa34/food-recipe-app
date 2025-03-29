import { createContext, useState,useEffect } from "react";

export const CardContext=createContext();

export const CardContextProvider=({children})=>{
  const [fetchData,setFetchData]=useState([]);
const [searchValue,setSearchValue]=useState("");
const[isError,setIsError]=useState(false);
const [isLoading,setIsLoading]=useState(false);
const [filteredData,setFilteredData]=useState("");
const [notFound,setNotFound]=useState(false);


    useEffect(()=>{
        const getData=async()=>{
            setIsLoading(true);
            setIsError(false);
            try{
            const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
            const data= await response.json();
            setFetchData(data.meals);
            setIsLoading(false);
            setIsError(false);
            console.log(data.meals);
        } catch (error){
            setIsError(true);
            setIsLoading(false)
            setFetchData("");
        console.log(error)
        }
    }
        getData();
    },[searchValue])


    
    return(
<CardContext.Provider value={{fetchData,setFetchData,isLoading,isError,filteredData,setFilteredData,setNotFound,notFound}}>
    {children}
</CardContext.Provider>
    )
};
