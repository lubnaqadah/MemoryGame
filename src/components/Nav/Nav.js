import React from "react";
import "./Nav.css";

const Title = props =>(
	<div>
	<nav className="navbar navbar-toggleable-md fixed-top navbar-inverse bg-inverse">
	<div className="collapse navbar-collapse" id="navbarSupportedContent">
	<ul className="navbar-nav mr-auto">
	<li className="navbar-brand">Clicky Game!!</li>
	<li className="navbar-brand"  style={{color: props.color}}>{props.msg}</li>
	<li className="navbar-brand score">Score: {props.score} | Top Score: {props.topScore}</li>
	</ul>
	</div>
	</nav>
	</div>
)
export default Title;
