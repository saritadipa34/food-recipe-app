import { FaShoppingCart } from "react-icons/fa";
import Button from "./Button";
import InputBox from "./InputBox";

const Header=()=>{
    return(
        <div className="w-full text-right bg-yellow-200 pr-2 h-[50px] py-2 flex justify-between">
<img className="h-10 w-20" src="/logo.png" alt="logo" />
            
<div className="flex w-1/2 justify-between text-center">
    <InputBox />
    <Button />
</div>
    <div className="w-[100px] flex justify-between px-2">
    <FaShoppingCart fontSize={30} />
    <h1 className="text-xl">0</h1>
    </div>
</div>
    )
}
export default Header;