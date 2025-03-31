import { IoRadioButtonOn } from "react-icons/io5";
import Button from "./Button";
import InputBox from "./InputBox";
import { useContext, useState } from "react";
import { CardContext } from "../context/CardContext";

const Header=()=>{
const [inputValue,setInputValue]=useState("");
const {fetchData,setFilteredData} = useContext(CardContext);

const handleSearch=()=>{
const filtered = fetchData.filter((item)=>{
return item.strMeal.toLowerCase().replace(/\s+/g,'').includes(inputValue.toLowerCase().replace(/\s+/g,''));
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
 
    <IoRadioButtonOn className="cursor-pointer text-4xl text-amber-800" />
    </div>
</div>
</>
    )
}
export default Header;