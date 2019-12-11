//this will be parent for all API data coming back
//text card & photo card import here
//export MainCard to APP
//import ohoto card 
//import axios

import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function MainCard (){
const [photos, setPhotos] = useState(Object);

useEffect (() =>{
    axios
    .get (`https://api.nasa.gov/planetary/apod?api_key=oa3UyAXThvhSOogf8ANbTZ3lFYLEjll8jValeMc1`)
    .then (response => {
        console.log(response.data);
        setPhotos(response.data);

    })
    .catch(error =>{
        console.log ("didnt work", error);
    });

}, []);

return (

    <div className = "photo_container">
                <PhotoCard
                // key = {photos.key}
                title = {photos.title}
                date = {photos.date}
                src = {photos.url}
                description = {photos.explanation}
                />
           
       
        
        </div>
);
   
    }


   