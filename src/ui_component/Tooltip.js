import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({tooltip}) => {
	const tooltipWrap = useRef(null);
	const btn = useRef(null);
	const tipConts = useRef(null);
	
	useEffect(()=> {
		const contsStyle = tipConts.current.style;
		const domClickFn = ()=>{
			contsStyle.display = 'none';
			document.removeEventListener('click', domClickFn);
		}
		
		btn.current.addEventListener('click', (e)=> {
			console.log('click');
			e.stopPropagation();
			console.log();
			if(contsStyle.display === '' || contsStyle.display === 'none') {
				contsStyle.display = 'block';
				document.addEventListener('click', domClickFn);
			}else{
				contsStyle.display = 'none';
				document.removeEventListener('click', domClickFn);
			}
		});
	});

	return (
		<span className="tooltipWrap" ref={tooltipWrap}>
			<button type="button" ref={btn}><em>팁가이드</em></button>
			<div className="tipCont" ref={tipConts}>
				<ul>
					{tooltip.tip.map((val, i)=>{
						return <li key={i}>{val}</li>;
					})}
				</ul>
			</div>
		</span>
	);
}

Tooltip.propTypes = {
	tooltip : PropTypes.object.isRequired,
}

export default Tooltip;