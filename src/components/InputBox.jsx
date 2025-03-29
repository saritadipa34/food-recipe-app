
const InputBox=({onChange,value})=>{
    return(
        <input onChange={onChange} className="h-8 w-3/4 border bg-gray-300 px-4" maxLength={35} placeholder="Search For Food" type="text" name="input" id="input" 
        
       value={value} />
    )
}
export default InputBox;