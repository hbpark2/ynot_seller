import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';


const GuidePopup = ({children}) => {
	const layerArea = useRef(null);
	const btnGuide = useRef(null);
	const layerWrap = useRef(null);
	const btnCloseLayer = useRef(null);
	
	useEffect(()=>{
		const body = document.querySelector('body');

		btnGuide.current.addEventListener('click', (e)=>{
			e.stopPropagation();
			body.appendChild(layerWrap.current);
			layerWrap.current.style.display = 'block';
		});
		btnCloseLayer.current.addEventListener('click', (e)=>{
			e.stopPropagation();
			layerWrap.current.style.display = 'none';
		});
	});

	return (
		<>
			<button type="button" className="btnHelpTip" ref={btnGuide}><em>도움말</em></button>
			<article className="layerWrap" ref={layerWrap}>
				{children}

				<button type="button" className="btnCloseLayer" ref={btnCloseLayer}><em>닫기</em></button>
			</article>
		</>

	);
}

GuidePopup.propTypes = {
	children : PropTypes.any.isRequired,
}

export default GuidePopup;