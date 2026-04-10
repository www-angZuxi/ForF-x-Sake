import { useState } from "react";
import Graph from "./components/Graph";
import Hint from "./components/Hint"

function App() {
  const equations = [
    ["2x-3", "ax-c"], 
    ["x^2-3x+1", "x^a-bx+c"], 
    ["x^3+3x^2-3", "x^a+ax^b-a"], 
    ["-x^3+3x^2+x-2", "-x^a+ax^b+x-b"], 
    ["cos(x)^3", "cos(x)^a"], 
    ["sin(x)^3+x-1", "sin(x)^a+x-c"]
  ];

  const [userEquation, setUserEquation] = useState("");
  let [index, setIndex] = useState(0);

  return (
  <>

    <header className="text-white text-center fs-5" style={{margin:"0.5vw", userSelect: "none"}}>ForF(x)Sake<i> - Graphing Game for nerds and enthusiasts alike.</i></header>

    <div className="
      row col" 
      style={{
        background: "#d7d0d5cf",
        borderRadius:"5vw 0 0 0",
        padding:"5vw 0 5vw"
      }}
    >

      

      <div className="col-3 text-muted mx-auto">

        <h1 className="mt-2 fs-1">Welcome!</h1>
        <h2 className="fs-4">Today's problem set:</h2>
        <h2 className="my-5 fs-4">Level {index+1}/{equations.length}</h2>

        {/* User Input */}
        <div className="form-floating mb-2">
        <input
          type="text" className="form-control" id="floatingInput" placeholder="Enter equation"
          value={userEquation}
          style={{width:"20vw"}}
          onChange={(e) => {
            let value = e.target.value.replaceAll(" ", "");
            setUserEquation(value);
            if (value.toLowerCase().replaceAll("y=", "") === equations[index][0]) {
              if(index+1 === equations.length){
                setTimeout(() => {window.alert("Woah! \r\nYou finished everything! 🤓\r\n Thank you for playing!");}, 200);
              }
              else{
                setTimeout(() => {window.alert("Correct! 🎉 \r\nMoving onto the next...");}, 200);
                setTimeout(() => {setIndex(++index);}, 200);
              }
            }
          }}
        />
        <label htmlFor="floatingInput" style={{userSelect: "none"}}>F(x) = ...</label>
        </div>

        <Hint hint={equations[index][1]}/>

      </div>

      

      {/* Graph Display */}
      <div className="col-8">
        <Graph equation={equations[index][0]} userEquation={userEquation} />
      </div>


    </div>

    <footer className="text-center text-white p-5" style={{height:"20vh", background:"darkslategray"}}>
      <p>Graphing Game by <a style={{color:"#c6e3fb"}} href="https://github.com/www-angZuxi" target="_blank">WWWang</a></p>
      <p>For feedback, please do hesitate to contact me at <u>juiceboy327@gmail.com</u></p>
    </footer>

  </>
  );
}

export default App;