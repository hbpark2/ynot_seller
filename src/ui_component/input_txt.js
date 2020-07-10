import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const InputTxt = ({maxLeng}) => {
	const iptWrap = useRef(null);
	const ipt = useRef(null);
	const writeLeng = useRef(null);

	const initFn = ()=> {
		if(maxLeng) {
			writeLeng.current.textContent = ipt.current.value.length;
		}else{
			iptWrap.current.classList.add('inptxtItem02');
			iptWrap.current.classList.remove('inptxtItem');
		}
	}

	useEffect(()=> {

		initFn();

		ipt.current.addEventListener('keyup', (e)=> {
			// console.log('keyup');
			var length = e.target.value.length;
			if(maxLeng) {
				if(length > maxLeng) {
					e.target.value = e.target.value.substring(0, maxLeng);
					writeLeng.current.textContent = length;
				}else{
					writeLeng.current.textContent = length;
				}
			}
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
		<span className="inptxtItem" ref={iptWrap}>
			<input type="text" ref={ipt} />
			{maxLeng && (
				<span className="limitLength">
					<em ref={writeLeng}></em> /
					<span>{maxLeng}</span>
				</span>
			)}
		</span>
	);
}

InputTxt.propTypes = {
	maxLeng : PropTypes.number,
}

export default InputTxt;