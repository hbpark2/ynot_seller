import React from 'react';

const Selectbox = () => {
	return (
		<div className="dsigSelectWrap">
			<div className="selected">
				<button type="button">상품번호</button>
			</div>
			<ul className="selectOpt">
				<li><button type="button">수취인명</button></li>
				<li><button type="button">구매자명</button></li>
				<li><button type="button">구매자연락처</button></li>
				<li><button type="button">상품번호</button></li>
				<li><button type="button">운송장번호</button></li>
			</ul>
		</div>
	);
}

export default Selectbox;