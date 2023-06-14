import React from "react";
import * as ReactDOMClient from "react-dom/client";
import './css/main.css'
import Header from "./components/App";




const root = ReactDOMClient.createRoot(document.getElementById("root"))

root.render(<Header />)


async function logData ()  {

  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=js&key=AIzaSyByMtJ1mpylPuE9Yr9HreMl5Bxzr7FTTS0`)
  const jsonData = await response.json();

  console.log(jsonData)
}

logData();

// AIzaSyB_GP2txS8lk2NxDU74yIpQfnX1jp1HvYA
