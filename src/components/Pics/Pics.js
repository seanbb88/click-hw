import React from 'react';
import './Pics.css';


function ClickCard(props) {
	return (
		<div  onClick={() => handleClick(props)}>
			<img alt={props.name} src={props.image} />
		</div>
	)
}




export default ClickCard