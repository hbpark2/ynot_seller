import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import GuidePopup from 'ui_component/guide_popup';

const RegFoldItemBox = ({children, title, helpTip, essential, closed}) => {
	const classEssent = essential ? 'essential' : '';
	const wrapper = useRef(null);
	const btnItem = useRef(null);
	const foldBox = useRef(null);
	// const btnGuide = useRef(null);
	const initFn = ()=>{
		if(closed) {
			wrapper.current.classList.add('closed');
			foldBox.current.style.display = 'none';
		}else{
			wrapper.current.classList.remove('closed');
			foldBox.current.style.display = 'block';
		}
	}

	useEffect(()=>{
		initFn();

		btnItem.current.addEventListener('click', ()=>{
			var foldStyle = foldBox.current.style;

			console.log(foldStyle.display === '');
			if(foldStyle.display === '' || foldStyle.display === 'none') {
				foldStyle.display = 'block';
				wrapper.current.classList.remove('closed');
			}else{
				foldStyle.display = 'none';
				wrapper.current.classList.add('closed');
			}
		});
	});

	return (
		<section className="regItemWrap" ref={wrapper}>
			<div className="titBox" role="button" tabIndex="0" ref={btnItem}>
				<strong className={`tit ${classEssent}`}>{title}</strong>
				
				{helpTip && (
					<GuidePopup>
						<header>
							<h1 className="layerTit">도움말</h1>
						</header>

						<div className="layerContainer">
							<div className="layerConts">
								<div className="layerTxt">
									취급 상품과 관련된&nbsp;카테고리를 선택해야 하며, 카테고리명 검색 탭에서 등록하고자 하는&nbsp;상품군의 카테고리를 선택하여 등록해 주시면 됩니다.
								</div>
							</div>
						</div>
					</GuidePopup>
				)}
			</div>
			<div className="regInptBox" ref={foldBox}>
				{children}
			</div>
		</section>
	);
}

RegFoldItemBox.propTypes = {
	closed : PropTypes.bool,
	essential : PropTypes.any,
	helpTip : PropTypes.any,
	children : PropTypes.any.isRequired,
	title : PropTypes.string.isRequired,
}

export default RegFoldItemBox;