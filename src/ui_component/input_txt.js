import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const InputTxt = ({minLeng, maxLeng, ver}) => {
	const verName = ver ? ver : 'inptxtItem';
	const iptWrap = useRef(null);
	const ipt = useRef(null);
	const writeLeng = useRef(null);

	const initFn = ()=> {
		if(verName === 'inptxtItem02') {
			iptWrap.current.classList.add(ver);
			iptWrap.current.classList.remove('inptxtItem');
		}else{
			if(maxLeng) {
				writeLeng.current.textContent = ipt.current.value.length;
			}
		}
	}

	useEffect(()=> {

		initFn();

		ipt.current.addEventListener('keyup', (e)=> {
			// console.log('keyup');
			var length = e.target.value.length;
			if(maxLeng && verName === 'inptxtItem') {
				writeLeng.current.textContent = length;
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
			{/* input text maxlength default length 524288 */}
			<input type="text" ref={ipt} minLength={minLeng ? minLeng : 0} maxLength={maxLeng ? maxLeng : 524288} />
			{maxLeng && verName === 'inptxtItem' && (
				<span className="limitLength">
					<em ref={writeLeng}></em> /
					<span>{maxLeng}</span>
				</span>
			)}
		</span>
	);
}

InputTxt.propTypes = {
	minLeng : PropTypes.number,
	maxLeng : PropTypes.number,
	ver : PropTypes.string,
}

export default InputTxt;