import React from "react";
import Search from "./Search";


function TravelPlanList( {travelPlans, setTerm, term,}) {
  
  const travelPlanCards = travelPlans.map((travelPlan) => (
    
    <li className="card" key={travelPlan.id}>
    <h4>Name: {`${travelPlan.name}`}</h4>
    <h4>Location: {`${travelPlan.location}`}</h4>
    <iframe src={travelPlan.iframe} width="600" height="450" style={{border:0}}/>Map of Location (iframe):
    </li>))
  
  return (
    <main>
      <Search setTerm={setTerm} term={term}/>
      <div className="cards">
      {travelPlanCards}
      </div>
    </main>
  );
}

export default TravelPlanList;
