import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

const RecipeBox=()=>{
const location=useLocation();
const recipe=location.state;
console.log(recipe);

    return(
        <div className=" bg-orange-300 h-screen pt-[30px] pb-0">
            <div>
        <h1 className="text-center text-2xl font-bold mb-2">Recipe Detail's</h1>
    <Link to="/"> <Button className="text-2xl" text={"⬅️"} /></Link>
        </div>
        <div className=" py-[10px] border px-[20px] flex justify-between gap-5 w-full">
            
            <div className="w-1/3 ">
            <img className="w-full object-cover" alt="pic" src={recipe.strMealThumb}/>
            </div>
            <div className=" px-2 w-3/4 ">

            <p className="text-left font-bold px-1 bg-orange-400 w-[80px] text-white flex justify-center items-center max-w-[100px] ">{recipe.strMeal}</p>
            <h2 className="text-left"><b>Instructions:</b></h2>
            <p>{recipe.strInstructions}</p>
            </div>
        </div>
        </div>
    )
}
export default RecipeBox;