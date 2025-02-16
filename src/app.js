import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./component/Body";



function App(){
    return(
        <>
          <h1 className="heading">Welcome to crypto world</h1>  
            <Body></Body>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);