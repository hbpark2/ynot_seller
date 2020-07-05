import React from 'react';
import PageTitle from 'ui_component/page_title'


const Main = () => {
	
	
	return (
		<div className="contents">
			<PageTitle
				title={'페이지 타이틀명'}
				caut_title = {'필수 항목'}
				tooltip = {
					<ul>
						<li>'네이버 쇼핑 카탈로그 상품 정보를 제공하여 내 판매 상품의 가격 관리를 용이하게 해주는 화면입니다.',</li>
						<li>'또한 알림 수신 기능을 활용하여 주력 상품의 가격 변동을 실시간 확인해보세요.'</li>
					</ul>
				}
			/>

			<section className="regItemWrap">
				<div className="titBox">
					<strong className="tit guideTip">
						카테고리
						<button type="button" className="btnHelpTip"><em>도움말</em></button>
					</strong>
					<button type="button" className="btnFold"><em>닫기</em></button>
				</div>
				<div className="regBox">

				</div>
			</section>
		</div>
	);
}

export default Main;