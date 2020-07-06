import React from 'react';
import PropTypes from 'prop-types';

const RegFoldItemBox = ({children, title, helpTip}) => {
	return (
		<section className="regItemWrap">
			<div className="titBox" role="button" tabIndex="0">
				<strong className="tit essential">{title}</strong>
				{helpTip && (<button type="button" className="btnHelpTip"><em>도움말</em></button>)}
			</div>
			<div className="regInptBox">
				{children}
			</div>
		</section>
	);
}

RegFoldItemBox.propTypes = {
	children : PropTypes.any.isRequired,
	title : PropTypes.string.isRequired,
}

export default RegFoldItemBox;