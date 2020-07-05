import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const Selectbox = ({defaultVal, selectVal}) => {
	let value = selectVal.val;
	let defaultValue = defaultVal || value[0];
	const selectWrap = useRef(null);
	const selectView = useRef(null);
	const optList = useRef(null);
	const domClickFn = ()=>{
		optList.current.style.display = 'none';
		selectWrap.current.classList.remove('active');
		document.removeEventListener('click', domClickFn);
	}

	useEffect(()=>{
		document.querySelector(`.${selectView.current.className} button`).addEventListener('click', (e)=> {
			e.stopPropagation();
			if(optList.current.style.display === '' || optList.current.style.display === 'none') {
				optList.current.style.display = 'block';
				selectWrap.current.classList.add('active');
				document.addEventListener('click', domClickFn);
			}else{
				optList.current.style.display = 'none';
				selectWrap.current.classList.remove('active');
				document.removeEventListener('click', domClickFn);
			}
		});
	});

	return (
		<div className="dsigSelectWrap" ref={selectWrap}>
			<div className="selected" ref={selectView}>
				<button type="button">
					{defaultValue}
				</button>
			</div>
			<ul className="selectOpt" ref={optList} >
				{value.length > 0 && value.map((item, key)=>{
					return <li key={key}><button type="button">{item}</button></li>;
				})}
			</ul>
		</div>
	);
}

Selectbox.propTypes = {
	defaultVal :  PropTypes.string,
	selectVal :  PropTypes.object.isRequired,
}

export default Selectbox;