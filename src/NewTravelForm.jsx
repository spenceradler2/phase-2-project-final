import React from "react";
import { useState } from "react";

function NewTravelForm({newTravelPlan}) {

  const initialFormData = {
    name: "",
    location: "",
    iframe: ""
  }
    const [formData, setFormData] = useState(initialFormData)
    function handleChange(event) {  
      const newFormData = {
        ...formData,
        [event.target.name]: event.target.value
      }
      setFormData(newFormData)
  }

  function handleSubmit(e) {
    e.preventDefault()
      fetch("http://localhost:3000/travelPlans", {
      method: "POST",
      headers:{
      "Content-Type": "application/json"},
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(data => {
        newTravelPlan(data)
        setFormData(initialFormData)
      })
  }

  return (
    <div className="new-travelPlan-form">
      <h2>Add a Travel Plan:</h2>
      <form onSubmit={handleSubmit}>

        <input type="text" name="name" placeholder="Name" 
        value={ formData.name } 
        onChange={ handleChange } />

        <input type="text" name="location"  placeholder="Location" 
        value={ formData.location } 
        onChange={ handleChange } />

        <input type="text" name="iframe" placeholder="Iframe URL" 
        value={ formData.iframe } 
        onChange={ handleChange }/>

      </form>

      <br></br>
      <br></br>


      <h4>How to add the iframe:</h4>
      <ul>Go to Google Maps</ul>
      <ul>Search for the location</ul>
      <ul>Go to the share option</ul>
      <ul>Go to embed iframe</ul>
      <ul>Copy and paste src into the form location</ul>

    </div>
  );
}

export default NewTravelForm;
