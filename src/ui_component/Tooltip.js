import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({children}) => {//children 커스텀 태그안 마크업 DOM요소를 가지고 온다
	const tooltipWrap = useRef(null);
	const btn = useRef(null);
	const tipConts = useRef(null);

	useEffect(()=> {
		const contsStyle = tipConts.current.style;
		const domClickFn = ()=>{
			contsStyle.display = 'none';
			contsStyle.zIndex = 0;
			document.removeEventListener('click', domClickFn);
		}
		
		btn.current.addEventListener('click', (e)=> {
			e.stopPropagation();
			if(contsStyle.display === '' || contsStyle.display === 'none') {
				contsStyle.display = 'block';
				contsStyle.zIndex = 10;
				document.addEventListener('click', domClickFn);
			}else{
				contsStyle.display = 'none';
				contsStyle.zIndex = 0;
				document.removeEventListener('click', domClickFn);
			}
		});
	});

	return (
		<span className="tooltipWrap" ref={tooltipWrap}>
			<button type="button" ref={btn}><em>팁가이드</em></button>
			<div className="tipCont" ref={tipConts}>
				{children}
			</div>
		</span>
	);
}

Tooltip.propTypes = {
	children : PropTypes.any.isRequired,
}

export default Tooltip;