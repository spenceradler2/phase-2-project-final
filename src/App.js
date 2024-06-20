import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx"

function App() {

  const [travelPlans, setTravelPlans] = useState([])
  const [term, setTerm] = useState("")
  let viewedTravelPlans

  function addTravelPlan(newTravelPlan){
    setTravelPlans([...travelPlans, newTravelPlan])
  }

  useEffect(() => {
    fetch("http://localhost:3000/travelPlans")
      .then((resp) => resp.json())
      .then(data => {setTravelPlans(data)})
    }, [])

      
      if(term === "search...") {
        viewedTravelPlans = travelPlans
      } else {
        viewedTravelPlans = travelPlans.filter(travelPlan => travelPlan.name.toLowerCase().includes(term.toLowerCase()))
      }

  return (
    <div className="app">
    <Navbar />
      <Outlet className="outlet" context={{
        travelPlans : viewedTravelPlans,
        addTravelPlan : addTravelPlan,
        setTerm : setTerm,
        term : term,
         }}/>
    </div>
    
)}
export default App;
