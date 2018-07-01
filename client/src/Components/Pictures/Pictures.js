import React from "react";
import "./Pictures.css";


const handleClick =(props)  => {
  props.sufflePictures(); 
  props.clickedPicture(props.id); 
}


const Pictures = (props) => (
  <div>
    <img alt={props.name} src={props.image} onClick={() => handleClick(props)}/>
  </div>
);

export default Pictures;
