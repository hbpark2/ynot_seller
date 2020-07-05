import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'ui_component/Tooltip';

const PageTitle = ({title, caut_title, tooltip}) => {
	return (
		<div className="pageTitleWrap">
			<h2 className="pageTitle">{title}</h2>
			{tooltip && (
				<Tooltip
					tooltip={tooltip}
				/>
			)}
			{caut_title && (
				<span className="caution">{caut_title}</span>
			)}
		</div>
	);
}

PageTitle.propTypes = {
	caut_title : PropTypes.string,
	tooltip : PropTypes.object,
	title : PropTypes.string.isRequired,
}

export default PageTitle;