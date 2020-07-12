import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';


const LayerPopup = ({children, title, btnName}) => {
	const helpItemBox = useRef(null);
	const btnGuide = useRef(null);
	const layerWrap = useRef(null);
	const btnCloseLayer = useRef(null);
	const layerMask = document.createElement('div');
	const clostFn = (e)=>{
		e.stopPropagation();
		layerMask.remove();
		helpItemBox.current.appendChild(layerWrap.current);
		layerWrap.current.style.display = 'none';
	}
	
	useEffect(()=>{
		const body = document.querySelector('body');

		btnGuide.current.addEventListener('click', (e)=>{
			e.stopPropagation();
			layerMask.classList.add('layerMask');
			body.appendChild(layerMask);
			body.appendChild(layerWrap.current);
			layerWrap.current.style.display = 'block';
			layerMask.addEventListener('click', clostFn);
		});
		btnCloseLayer.current.addEventListener('click', clostFn);
	});

	return (
		<span className="helpItemBox" ref={helpItemBox}>
			<button type="button" className="btnHelpTip" ref={btnGuide}><em>{btnName}</em></button>
			<article className="layerWrap" ref={layerWrap}>
				<header>
					<h1 className="layerTit">{title}</h1>
				</header>
				{children}

				<button type="button" className="btnCloseLayer" ref={btnCloseLayer}><em>닫기</em></button>
			</article>
		</span>

	);
}

LayerPopup.propTypes = {
	children : PropTypes.any.isRequired,
	title : PropTypes.any,
	btnName : PropTypes.string.isRequired,
}

export default LayerPopup;