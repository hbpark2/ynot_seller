import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header id="header">
			<div className="headerInner">
				<h1 className="logo"><Link to="/"><em>WHY NOT</em></Link></h1>
			</div>
		</header>
	);
}

export default Header;