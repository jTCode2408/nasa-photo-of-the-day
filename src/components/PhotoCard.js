//will hold photo, title, date, explanation returned
//child of MainCard
//export photo card to MainCard
import React from "react";


const PhotoCard = props =>{

    return (
        <div className = "photo_card">
          <img className="image" src = {props.url} alt= "NASA pic of the day" /> 
            <h2>Photo Title: {props.title} </h2>
    <h3>Photo Taken: {props.date}</h3>
    <p>Photo Decsription: {props.explanation} </p>
    
    </div>
       
    );
}

export default PhotoCard;