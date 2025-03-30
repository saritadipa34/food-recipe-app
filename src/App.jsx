
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import RecipeBox from "./components/RecipeBox";

const App=()=>{
  
  return(
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<RecipeBox />} />
      </Routes>
      </Router>
    </div>
  )
}
export default App;