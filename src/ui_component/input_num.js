import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const InputNum = ({unit}) => {
	const iptWrap = useRef(null);
	const ipt = useRef(null);

	const initFn = ()=> {
		
	}

	useEffect(()=> {

		initFn();

		ipt.current.addEventListener('keyup', (e)=> {
			// console.log('keyup');
			var regexp = /[^0-9]/g;
			var val = e.target.value;
			e.target.value = val.replace(regexp, '');
		});
		ipt.current.addEventListener('focusin', (e)=> {
			// console.log(`e.target = `, e.target);
			iptWrap.current.classList.add('focus');
		});
		ipt.current.addEventListener('focusout', (e)=> {
			// console.log(`e.target = `, e.target);
			iptWrap.current.classList.remove('focus');
		});
	});

	return (
		<span className="inpNumItem" ref={iptWrap}>
			<input type="text" ref={ipt} />
			<em className="unit">{unit}</em>
		</span>
	);
}

InputNum.propTypes = {
	unit : PropTypes.string,
}

export default InputNum;