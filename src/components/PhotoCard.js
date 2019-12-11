//will hold photo, title, date, explanation returned
//child of MainCard
//export photo card to MainCard
import React from "react";


const PhotoCard = props =>{
console.log(props);
    return (
        <div className = "photo_card">
            <h2>Photo Decsription: </h2>
            <p> {props.description} </p>
          <img className="image" src = {props.image} alt= "NASA pic of the day" /> 
            <h2>Title: {props.title} </h2>
    <h3>Photo Taken: {props.date}</h3>

    
    </div>
       
    );
}

export default PhotoCard;