import React from "react";
import * as ReactDOMClient from "react-dom/client";
import './css/main.css'
import Header from "./components/App";




const root = ReactDOMClient.createRoot(document.getElementById("root"))

root.render(<Header />)





