import React from "react";
import Search from "./Search";
import { useOutletContext } from "react-router-dom";


function TravelPlanList( ) {
  
  const {travelPlans} = useOutletContext()
  const {setTerm} = useOutletContext()
  const {term} = useOutletContext()


  const travelPlanCards = travelPlans.map((travelPlan) => (
    
    <div className="card" key={travelPlan.id}>
    <h5>Name: {`${travelPlan.name}`}</h5>
    <h5>Location: {`${travelPlan.location}`}</h5>
    <h5>Date: {`${travelPlan.date}`}</h5>
    <h5>Map of Location:</h5>
    <br></br>
    <iframe src={travelPlan.iframe} width="600" height="450" style={{border:0}}/>
    <div></div>
    <hr></hr>
    </div>))
  
  return (
    <main>
      <h2>Travel Plans: </h2>
      <Search setTerm={setTerm} term={term}/>
      <br></br>
      <div className="cards">
      {travelPlanCards}
      </div>
    </main>
  );
}

export default TravelPlanList;
