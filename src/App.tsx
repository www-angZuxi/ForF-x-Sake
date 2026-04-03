import Graph from './components/Graph';

function App(){

  const equation = "x^2+1"

  return <>

  <div className="form-floating mb-3">
  <input
    type="text" className="form-control"
    id="floatingInput" placeholder="Enter equation"
    onChange={(e) => {
      if((e.target as HTMLInputElement).value.replaceAll(" ", "") == equation){
        setTimeout(()=>{window.alert("WE DID ITTT")}, 200);
      }
    }}
  />
  <label htmlFor="floatingInput">Enter Equation...</label>
  </div>
  <div id="msg"></div>
  

  <Graph equation={equation} />
  
  </>;
}


export default App;