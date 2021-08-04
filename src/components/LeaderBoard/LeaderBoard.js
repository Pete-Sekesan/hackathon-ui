<<<<<<< HEAD
import React from 'react';
import "./LeaderBoard.css";
import testImg from '../../assets/generic-avatar-1.jpeg';

function LeaderBoard() {
    return (
        <div className="container">
		<div className="leaderboard">
			<div className="head">
				<i className="fas fa-crown"></i>
				<h1>Lifetime Leaderboard</h1>
			</div>
			<div className="body">
				<ol>
						<li>
					    <img src={testImg} className="leader-avatar" />
						<mark>Test 1</mark>
						<small>948</small>
					</li>
						<li>
						<img src={testImg} className="leader-avatar" />
						<mark>Test 2</mark>
						<small>750</small>
					</li>
						<li>
						<img src={testImg} className="leader-avatar" />
						<mark>Test 3</mark>
						<small>684</small>
						</li>
						
						<li>
						<img src={testImg} className="leader-avatar" />
						<mark>Test 4</mark>
						<small>684</small>
						</li>
						
						<li>
						<img src={testImg} className="leader-avatar" />
						<mark>Test 5</mark>
						<small>684</small>
					</li>
				</ol>
			</div>
		</div>
	</div>
    )
}

export default LeaderBoard
=======
import React from "react";

function LeaderBoard() {
  return <div></div>;
}

export default LeaderBoard;
>>>>>>> 1cde3b953399ede872dac5b8e339e2133fba1125
