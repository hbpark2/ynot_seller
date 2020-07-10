import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';


const Checkbox = ({val, txt, checked}) => {
	const label = useRef(null);
	const ipt = useRef(null);
	useEffect(()=>{
		if(ipt.current.checked) {
			label.current.classList.add('checked');
		}else{
			label.current.classList.remove('checked');
		}

		ipt.current.addEventListener('click', (e)=>{
			if(e.target.checked) {
				label.current.classList.add('checked');
			}else{
				label.current.classList.remove('checked');
			}
		});
	});

	return (
		<label className="chkItem" value={val} ref={label}>
			<span><input type="checkbox" ref={ipt} defaultChecked={checked ? checked : ''}/></span>
			<em>{txt}</em>
		</label>
	);
}

Checkbox.propTypes = {
	checked : PropTypes.bool,
	val : PropTypes.any.isRequired,
	txt : PropTypes.any.isRequired,
}

export default Checkbox;