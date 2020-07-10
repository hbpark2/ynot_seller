import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';


const Radiobox = ({val, txt, checked, groupName}) => {
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
				document.querySelectorAll(`.radioItem[name=${groupName}]`).forEach((el)=>{
					el.closest('.radioItem').classList.remove('checked');
				});
				label.current.classList.add('checked');
			}
		});
	});

	return (
		<label className="radioItem" name={groupName} value={val} ref={label}>
			<span><input type="radio" ref={ipt} defaultChecked={checked ? checked : ''}/></span>
			<em>{txt}</em>
		</label>
	);
}

Radiobox.propTypes = {
	checked : PropTypes.bool,
	groupName : PropTypes.any.isRequired,
	val : PropTypes.any.isRequired,
	txt : PropTypes.any.isRequired,
}

export default Radiobox;