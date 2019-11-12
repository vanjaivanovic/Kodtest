import React, { Component } from 'react';

import Savings from '../assets/Group2.svg';
import Insurance from '../assets/Group2-1.svg';


const Home = props => (

	<main>
		<h1 className="tc b f3 pv3 blue">Hej Folke!</h1>
		<div className="w-80-l w-90 pv5 center mb7 bg-blue">
			<div className="flex justify-center">
				<div className="img-small br2 w8 pa2 ma2 bg-white">
					<img className="pt3 pl3 w-80" src={Insurance} alt="Folksam - mina försäkringar"/>
					<p className="blue b pt2 tc">Mina försäkringar</p>
				</div>
				<div className="img-small img-savings br2 pa2 ma2 justify-center bg-white">
					<img className="pt3 mt1 pl3 pl1-l w-70 w-80-l" src={Savings} alt="Folksam - mina besparingar"/>
					<p className="blue b pt2 ml3 ml2-l">Mitt sparande</p>
				</div>
			</div>
		</div>
	</main>


)


export default Home;
