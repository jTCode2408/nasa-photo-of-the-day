//will hold photo, title, date, explanation returned
//child of MainCard
//export photo card to MainCard
import React from "react";


const PhotoCard = props =>{
console.log(props);
    return (
        <div className = "photo_card">
<div className = "photo_title">
            <h2>Today's Photo: </h2>
            <h4> {props.title} </h4>
            </div>
            <div className = "decription">

          <img className="image" src = {props.image} alt= "NASA pic of the day" /> 
          <h2>Photo Decsription: </h2>
            <p> {props.description} </p>
            </div>
            <div className = "photo_date">
    <h3>Date: {props.date}</h3>
    </div>

    
    </div>
       
    );
}

export default PhotoCard;