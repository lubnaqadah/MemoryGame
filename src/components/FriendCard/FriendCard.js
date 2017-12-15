import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
	
	<div className="card" >
	<div className="img-container">
		<img alt={props.name} src={props.image} id= {props.id} key = {props.id} onClick={() => props.clicky(props.id)}/>
			</div>

			</div>
		);

export default FriendCard;
