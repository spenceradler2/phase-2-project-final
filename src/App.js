import React, { useEffect, useState } from "react";
import TravelPlanList from "./TravelPlanList.jsx";
import NewTravelForm from "./NewTravelForm";
import Navbar from './Navbar'

function App() {

  const [travelPlans, setTravelPlans] = useState([])
  const [term, setTerm] = useState("")
  let viewedTravelPlans

  function addTravelPlans(newTravelPlan){
    setTravelPlans([...travelPlans, newTravelPlan])
  }

  useEffect(() => {
    fetch("http://localhost:3000/travelPlans")
      .then((resp) => resp.json())
      .then(data => {setTravelPlans(data)})
    }, [])

      
      if(term === "Type a name to search for someone's travel plans...") {
        viewedTravelPlans = travelPlans
      } else {
        viewedTravelPlans = travelPlans.filter(travelPlan => travelPlans.name.toLowerCase().includes(term.toLowerCase()))
      }

  return (
    <div className="app">
    <h1>Welcome to the travel plan website where you can share your travel plans and see everyone else's upcoming travel plans</h1>
    <Navbar />
    <NewTravelForm 
      addTravelPlans={addTravelPlans}
      />
    <TravelPlanList 
        travelPlans = {viewedTravelPlans}
        setTerm={setTerm}
        term={term}
      />
    </div>
    
)}
export default App;
