import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import Title from "./components/Title";
import Nav from "./components/Nav";
import friends from "./friends.json";
import "./App.css";


class App extends Component {
	// Setting this.state.friends to the friends json array
	state = {
		friends,
		score : 0 ,
		topScore: 0,
		clicked: [],
		msg : "Click an image to begin!!",
		color: "#fff"
	};

clicky = id => {


	if (this.state.clicked.indexOf(id) === -1){
		this.setState({ msg: "You Guessed Correctly!", color: "#fff"});
		const newScore = this.state.score + 1;
		this.setState({ score: newScore, clicked: this.state.clicked.concat(id)});
		if (newScore >= this.state.topScore){
			this.setState({topScore: newScore});
		};

	}else{
		this.setState({ score: 0, clicked: [], msg: "You Guessed Wrong!", color: "red"});

	}

	const newFriends = this.state.friends 
	for (var i in newFriends){
		newFriends[i].random = Math.random()
	}
	//	console.log(newFriends)


	newFriends.sort(function(a, b){
		return a.random - b.random;
	})
	console.log(newFriends);
	this.setState({friends : newFriends})


};

render() {
	return (
		<Wrapper>
		<Nav msg= {this.state.msg} color= {this.state.color} score={this.state.score} topScore = {this.state.topScore} />
		<Title/>
		<Main>
		{this.state.friends.map(friend => (
		<FriendCard
		clicky={this.clicky}
		id={friend.id}
		key={friend.id}
		image={friend.image}
		/>
		
	))}
	</Main>
</Wrapper>
);
}
}

export default App;
