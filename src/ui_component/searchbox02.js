import React from 'react';
import PropTypes from 'prop-types';

const Searchbox02 = ({width}) => {
	return (
		<div className="srchItemWrap02" style={{'width' : width ? width : 0}}>
			<input type="text" />
			<button type="button"><em>검색</em></button>
		</div>
	);
}

Searchbox02.propTypes = {
	width : PropTypes.string,
}

export default Searchbox02;