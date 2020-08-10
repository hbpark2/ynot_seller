import React from 'react';
import PageTitle from 'ui_component/page_title';
import SimpleBar from 'simplebar-react';
import RegFoldItemBox from 'ui_component/regist_folding_box';
import TabCmpt from 'ui_component/tab_box';
import Searchbox02 from 'ui_component/searchbox02';
import InputTxt from 'ui_component/input_txt';
import InputNum from 'ui_component/input_num';
import 'simplebar/dist/simplebar.min.css';


const ProductReg = () => {
	
	
	return (
		<div className="contents">

			{/* 타이트 영역 */}
			<PageTitle
				title={'상품등록'}
				essential_title = {'필수 항목'}
			/>
			{/* // 타이트 영역 */}

			<RegFoldItemBox
				title={'카테고리'}
				essential={true}
				// closed={true}
				tooltip = {
					<ul>
						<li>'네이버 쇼핑 카탈로그 상품 정보를 제공하여 내 판매 상품의 가격 관리를 용이하게 해주는 화면입니다.',</li>
						<li>'또한 알림 수신 기능을 활용하여 주력 상품의 가격 변동을 실시간 확인해보세요.'</li>
					</ul>
				}
			>
				
				<TabCmpt
					setIndex = {1}
					tabName={
						['카테고리 검색', '카테고리 선택']
					}
				>
					<div className="tabConts">
						<Searchbox02 width={'70%'} />
					</div>
					<div className="tabConts">
						<div className="cateListWrap">
							<SimpleBar className="cateItemBox">
								<ul className="cateItemCase">
									<li><button type="button">가구/인테리어</button></li>
									<li><button type="button">가구/인테리어</button></li>
									<li><button type="button">가구/인테리어</button></li>
									<li><button type="button">가구/인테리어</button></li>
									<li><button type="button">가구/인테리어</button></li>
									<li><button type="button">가구/인테리어</button></li>
									<li><button type="button">가구/인테리어</button></li>
									<li><button type="button">가구/인테리어</button></li>
									<li><button type="button">가구/인테리어</button></li>
								</ul>
							</SimpleBar>
							<SimpleBar className="cateItemBox">
								<ul className="cateItemCase">
									<li><button type="button">category0201</button></li>
									<li><button type="button">category0201</button></li>
									<li><button type="button">category0201</button></li>
									<li><button type="button">category0201</button></li>
									<li><button type="button">category0201</button></li>
									<li><button type="button">category0201</button></li>
									<li><button type="button">category0201</button></li>
									<li><button type="button">category0201</button></li>
								</ul>
							</SimpleBar>
							<SimpleBar className="cateItemBox">
								<ul className="cateItemCase">
									<li><button type="button">category0301</button></li>
									<li><button type="button">category0301</button></li>
									<li><button type="button">category0301</button></li>
									<li><button type="button">category0301</button></li>
									<li><button type="button">category0301</button></li>
									<li><button type="button">category0301</button></li>
									<li><button type="button">category0301</button></li>
									<li><button type="button">category0301</button></li>
								</ul>
							</SimpleBar>
							<SimpleBar className="cateItemBox">
								<ul className="cateItemCase">
									<li><button type="button">category0401</button></li>
									<li><button type="button">category0401</button></li>
									<li><button type="button">category0401</button></li>
									<li><button type="button">category0401</button></li>
									<li><button type="button">category0401</button></li>
									<li><button type="button">category0401</button></li>
									<li><button type="button">category0401</button></li>
									<li><button type="button">category0401</button></li>
									<li><button type="button">category0401</button></li>
									<li><button type="button">category0401</button></li>
								</ul>
							</SimpleBar>
						</div>
					</div>

				</TabCmpt>

			</RegFoldItemBox>

			<RegFoldItemBox
				title={'상품명'}
				essential={true}
				helpTip={
					<div className="layerTxt">
						취급 상품과 관련된&nbsp;카테고리를 선택해야 하며, 카테고리명 검색 탭에서 등록하고자 하는&nbsp;상품군의 카테고리를 선택하여 등록해 주시면 됩니다.
					</div>
				}
			>
				<InputTxt maxLeng={1000} />
			</RegFoldItemBox>

			<RegFoldItemBox
				title={'판매가'}
				essential={true}
			>
				<InputNum
					unit={'원'}
				/>
			</RegFoldItemBox>
		</div>
	);
}

export default ProductReg;