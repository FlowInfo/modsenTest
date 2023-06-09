import React from "react";
import  ReactDOMClient from "react-dom/client";

const help = "help"

const elements = (<div className="name"> 
  <h1>{help}</h1>
  <h1>Helo</h1>
</div>)

const root = ReactDOMClient.createRoot(document.getElementById("root"))

root.render(elements)