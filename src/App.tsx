import { useState } from "react";
import Graph from "./components/Graph";

function App() {
  const equations = ["x", "2x", "3x"];

  const [userEquation, setUserEquation] = useState("");
  let [index, setIndex] = useState(0);

  return (
  <>
    {/* Graph Display */}
    <Graph equation={equations[index]} userEquation={userEquation} />

    {/* User Input */}
    <div className="form-floating mb-3">
    <input
      type="text" className="form-control" id="floatingInput" placeholder="Enter equation"
      value={userEquation}
      onChange={(e) => {
        let value = e.target.value.replaceAll(" ", "");
        setUserEquation(value);
        if (value.toLowerCase().replaceAll("y=", "") === equations[index]) {

          if(index+1 === equations.length){
            setTimeout(() => {window.alert("Woah! \r\nYou finished everything!\r\nHere, this might be helpful");}, 200)
            window.location.href = "https://rentafriend.com/";
          }

          setTimeout(() => {window.alert("Correct! 🎉 \r\nMoving onto the next...");}, 6700);
          setTimeout(() => {setIndex(++index);}, 200);
        }
      }}
    />
    <label htmlFor="floatingInput">Enter Equation...</label>

    </div>

  </>
  );
}

export default App;