import React, { useRef, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import PropTypes from 'prop-types';

const TabCmpt = ({children, setIndex, tabName}) => {
	let swiperLib = null;
	const activeIndex = setIndex || 0;
	const swiperRef = useRef(null);
	const tabItemView = useRef(null);
	const forFn = (target, callbak)=>{
		target.forEach((val, i)=>{
			callbak(val, i);
		});
	}
	const rmvClass = (targetEl)=>{
		forFn(targetEl, (val)=>{
			val.classList.remove('active');
		});
	}
	const addClass = (targetEl, i)=>{
		forFn(targetEl, (val, j)=>{
			if(i === j) val.classList.add('active');
		});
	}
	const params = {
		slidesPerView: 'auto',
		WrapperEl: 'ul',
		freeMode: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		on : {
			init : (swiper)=> {
				swiperLib = swiperRef.current.swiper;
				swiperLib.slideTo(activeIndex, 600);
				rmvClass(swiperLib.slides);
				addClass(swiperLib.slides, activeIndex);
				forFn(tabItemView.current.childNodes, (val, i)=>{
					if(activeIndex === i) {
						val.style.display = 'block';
					}else{
						val.style.display = 'none';
					}
				});
			}
		}
	}

	useEffect(()=>{
		forFn(swiperLib.slides, (val, i)=>{
			val.addEventListener('click', (e)=>{
				var _this = e.target.closest('li');
				rmvClass(swiperLib.slides);
				_this.classList.add('active');
				forFn(tabItemView.current.childNodes, (val, j)=>{
					if(j === i) {
						val.style.display = 'block';
					}else{
						val.style.display = 'none';
					}
				});
			});
		});
	});

	return (
		<div className="tabWrap">
			<div className="tabItem">
				<div className="cmptSwiper">
					<Swiper {...params} ref={swiperRef}>
						{
							tabName.map((val, i)=>{
							return <li key={i}><button type="button">{val}</button></li>;
							})
						}
					</Swiper>
				</div>
			</div>
			<div className="tabItemView" ref={tabItemView}>
				{children}
			</div>
		</div>
	);
}

TabCmpt.propTypes = {
	tabName : PropTypes.array.isRequired,
	children : PropTypes.any.isRequired,
	setIndex : PropTypes.number,
}

export default TabCmpt;