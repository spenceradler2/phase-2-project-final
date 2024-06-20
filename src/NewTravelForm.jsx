import React from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";


function NewTravelForm() {

const {addTravelPlan} = useOutletContext()

  const initialFormData = {
    name: "",
    location: "",
    date: "",
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
        addTravelPlan(data)
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
        <br></br>

        <input type="text" name="location"  placeholder="Location" 
        value={ formData.location } 
        onChange={ handleChange } />
        <br></br>

        <input type="text" name="date"  placeholder="Date" 
        value={ formData.date } 
        onChange={ handleChange } />
        <br></br>

        <input type="iframe" name="iframe" placeholder="Iframe URL" 
        value={ formData.iframe } 
        onChange={ handleChange }/>
        <br></br>

        <button type="submit">Add Travel Plan</button>
        <br></br>

      </form>

      <br></br>
      <h4>How to add the iframe:</h4>
      <ol>Go to Google Maps</ol>
      <ol>Search for the location</ol>
      <ol>Go to the share option</ol>
      <ol>Go to embed iframe</ol>
      <ol>Copy and paste src without the quotes into the form location. See example below:</ol>
      <ol> https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13222607.363026315!2d-18.82697955!3d35.99157515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb32242dbf4226d5%3A0x2ab84b091c4ef041!2sPortugal!5e0!3m2!1sen!2sus!4v1718314236955!5m2!1sen!2sus
      </ol>


    </div>
  );
}

export default NewTravelForm;
