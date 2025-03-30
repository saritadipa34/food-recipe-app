import { FaShoppingCart } from "react-icons/fa";
import Button from "./Button";
import InputBox from "./InputBox";
import { useContext, useState } from "react";
import { CardContext } from "../context/CardContext";

const Header=()=>{
const [inputValue,setInputValue]=useState("");
const {fetchData,setFilteredData,filteredData,setNotFound} = useContext(CardContext);

const handleSearch=()=>{
const filtered = fetchData.filter((item)=>{
return inputValue.trim().toLowerCase() === item.strMeal.toLowerCase();
})
setFilteredData(filtered);
setInputValue("");
}

const handleInput=(e)=>{
    const value=e.target.value;
    setInputValue(value)
    console.log(e.target.value,"input",inputValue)
}


    return(
<>      <h1 className="text-center font-bold text-4xl mb-2">FOOD RECIPE APP</h1>
        <div className="w-full text-right bg-orange-400 pr-2 h-[50px] py-2 flex justify-between">
<img className="h-10 w-20" src="/logo.png" alt="logo" />          
<div className="flex w-1/2 justify-between text-center">
    <InputBox onChange={handleInput} value={inputValue}/>
    <Button text="Search" onClick={handleSearch} />
</div>
    <div className="w-[100px] flex justify-between px-2">
    <FaShoppingCart fontSize={30} />
    <h1 className="text-xl">0</h1>
    </div>
</div>
</>
    )
}
export default Header;