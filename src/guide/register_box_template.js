import React from 'react';
import PageTitle from 'ui_component/page_title';
import RegFoldItemBox from 'ui_component/regist_folding_box';
import InputTxt from 'ui_component/input_txt';


const RegTemplate = () => {
	
	
	return (
		<div className="contents">
			<PageTitle
				title={'페이지 타이틀명'}
				essential_title = {'필수 항목'}
				tooltip = {
					<ul>
						<li>'네이버 쇼핑 카탈로그 상품 정보를 제공하여 내 판매 상품의 가격 관리를 용이하게 해주는 화면입니다.',</li>
						<li>'또한 알림 수신 기능을 활용하여 주력 상품의 가격 변동을 실시간 확인해보세요.'</li>
					</ul>
				}
			/>

			<RegFoldItemBox
				title={'입력 카테고리 타이틀영역 필수'}
				essential={true}
				closed={true}
			>
				<InputTxt
					maxLeng={9999}
				/>
			</RegFoldItemBox>

			<RegFoldItemBox
				title={'입력 카테고리 타이틀영역02'}
				helpTip={
					<div className="layerTxt">
						취급 상품과 관련된&nbsp;카테고리를 선택해야 하며, 카테고리명 검색 탭에서 등록하고자 하는&nbsp;상품군의 카테고리를 선택하여 등록해 주시면 됩니다.
					</div>
				}
			>
				<InputTxt
					maxLeng={9999}
				/>
			</RegFoldItemBox>

			<div className="fixedBtnBox">
				<div className="btnR">
					<button type="button" className="btnItemL03"><span>미리보기</span></button>
					<button type="button" className="btnItemL03"><span>임시저장하기</span></button>
					<button type="button" className="btnItemL02"><span>저장하기</span></button>
					<button type="button" className="btnItemL"><span>취소하기</span></button>
				</div>
			</div>

		</div>
	);
}

export default RegTemplate;