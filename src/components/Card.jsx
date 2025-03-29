import Button from "./Button";

const Card=({itemName,itemImage})=>{
   
    return(
        <div className="h-[270px] w-[250px] bg-white border flex flex-col items-center">
            <div className="w-full">
<img className="h-[170px] w-full" src={itemImage} alt="image"/>
</div>
<p className="text-center my-4 font-bold">{itemName}</p>
<Button className={"rounded-lg"} text={"Recipe"} />
        </div>
    )
}
export default Card;