import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';


const Header = props => (
	<div className="bb bw1 light-gray">
		<div className="ml6-l ml4 mv3"><Link to="/"><img className="h2" src = {Logo} /></Link></div>
	</div>
)

export default Header;