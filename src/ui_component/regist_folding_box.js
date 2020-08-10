import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import LayerPopup from 'ui_component/layer_popup';
import Tooltip from 'ui_component/Tooltip';

const RegFoldItemBox = ({children, title, helpTip, tooltip, essential, closed}) => {
	const classEssent = essential ? 'essential' : '';
	const wrapper = useRef(null);
	const btnItem = useRef(null);
	const foldBox = useRef(null);
	// const btnGuide = useRef(null);
	const initFn = ()=>{
		if(closed) {
			wrapper.current.classList.add('closed');
			foldBox.current.style.display = 'none';
		}else{
			wrapper.current.classList.remove('closed');
			foldBox.current.style.display = 'block';
		}
	}

	useEffect(()=>{
		initFn();

		btnItem.current.addEventListener('click', ()=>{
			var foldStyle = foldBox.current.style;

			if(foldStyle.display === '' || foldStyle.display === 'none') {
				foldStyle.display = 'block';
				wrapper.current.classList.remove('closed');
			}else{
				foldStyle.display = 'none';
				wrapper.current.classList.add('closed');
			}
		});
	});

	return (
		<section className="regItemWrap" ref={wrapper}>
			<div className="titBox" role="button" tabIndex="0" ref={btnItem}>
				<strong className={`tit ${classEssent}`}>{title}</strong>
				{tooltip && (
					<Tooltip>
						{tooltip}
					</Tooltip>
				)}
				{helpTip && (
					<LayerPopup
						btnName={'도움말팝업'}
						title={'도움말'}
					>
						<div className="layerContainer">
							<div className="layerConts">
								{helpTip}
							</div>
						</div>
					</LayerPopup>
				)}
			</div>
			<div className="regInptBox" ref={foldBox}>
				{children}
			</div>
		</section>
	);
}

RegFoldItemBox.propTypes = {
	closed : PropTypes.bool,
	essential : PropTypes.any,
	helpTip : PropTypes.any,
	tooltip : PropTypes.any,
	children : PropTypes.any.isRequired,
	title : PropTypes.string.isRequired,
}

export default RegFoldItemBox;