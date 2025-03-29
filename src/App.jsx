import Header from "./components/Header";
import Body from "./components/Body";
import { useState } from "react";

const App=()=>{
  
  return(
    <div className="min-h-screen px-[100px] py-[50px] w-screen bg-amber-300">
      <h1 className="text-center font-bold text-4xl mb-2">FOOD RECIPE APP</h1>
      <Header />
      <Body />
    </div>
  )
}
export default App;