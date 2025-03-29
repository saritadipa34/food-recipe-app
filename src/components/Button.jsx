
const Button=({className,text,onClick})=>{
    return(
        <button onClick={onClick} className={`border bg-orange-400 text-white cursor-pointer h-8 w-[60px] ${className}`}> 
            {text}
        </button>
    )
}
export default Button;