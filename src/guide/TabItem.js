import React from 'react';
import PageTitle from 'ui_component/page_title';
import RegFoldItemBox from 'ui_component/regist_folding_box';
import TabCmpt from 'ui_component/tab_box';

const TableItem = () => {
	
	
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
				title={'tab default'}
			>
				<TabCmpt
					setIndex={3}
				>
					<div className="tabConts" style={{'padding' : '20px', 'backgroundColor' : 'red'}}>
						TAB CONTENTS #01
					</div>
					<div className="tabConts" style={{'padding' : '20px', 'backgroundColor' : 'blue'}}>
						TAB CONTENTS #02
					</div>
					<div className="tabConts" style={{'padding' : '20px', 'backgroundColor' : 'green'}}>
						TAB CONTENTS #03
					</div>
					<div className="tabConts" style={{'padding' : '20px', 'backgroundColor' : 'orange'}}>
						TAB CONTENTS #04
					</div>
					<div className="tabConts" style={{'padding' : '20px', 'backgroundColor' : 'yellow'}}>
						TAB CONTENTS #05
					</div>
					<div className="tabConts" style={{'padding' : '20px', 'backgroundColor' : 'pink'}}>
						TAB CONTENTS #06
					</div>
					<div className="tabConts" style={{'padding' : '20px', 'backgroundColor' : 'blueviolet'}}>
						TAB CONTENTS #07
					</div>
					<div className="tabConts" style={{'padding' : '20px', 'backgroundColor' : 'teal'}}>
						TAB CONTENTS #08
					</div>
					<div className="tabConts" style={{'padding' : '20px', 'backgroundColor' : 'green'}}>
						TAB CONTENTS #09
					</div>
				</TabCmpt>
			</RegFoldItemBox>

		</div>
	);
}

export default TableItem;