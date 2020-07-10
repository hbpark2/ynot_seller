import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'ui_component/Tooltip';

const PageTitle = ({title, essential_title, tooltip}) => {
	return (
		<div className="pageTitleWrap">
			<h2 className="pageTitle">{title}</h2>
			{tooltip && (
				<Tooltip>
					{tooltip}
				</Tooltip>
			)}
			{essential_title && (
				<span className="essential">{essential_title}</span>
			)}
		</div>
	);
}

PageTitle.propTypes = {
	essential_title : PropTypes.string,
	tooltip : PropTypes.any,
	title : PropTypes.string.isRequired,
}

export default PageTitle;