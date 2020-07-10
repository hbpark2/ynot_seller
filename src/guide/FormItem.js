import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from 'ui_component/page_title';
import RegFoldItemBox from 'ui_component/regist_folding_box';
import Checkbox from 'ui_component/checkbox';
import Radiobox from 'ui_component/radiobox';
import InputTxt from 'ui_component/input_txt';

const FormItem = () => {
	
	
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
				title={'Button style'}
				// helpTip={true}
			>
				<div>
					<p>높이 : 34px</p>
					<br />
					<button type="button" className="btnItem"><span>btnItem button</span></button>
					<button type="button" className="btnItem02"><span>btnItem02 button</span></button>
					<button type="button" className="btnItem03"><span>btnItem03 button</span></button>
					<br /><br />
					<Link to="#" className="btnItem"><span>btnItem anchor</span></Link>
					<Link to="#" className="btnItem02"><span>btnItem02 anchor</span></Link>
					<Link to="#" className="btnItem03"><span>btnItem03 anchor</span></Link>
					<br />
					<br />
					<p>높이 : 40px</p>
					<br />
					<button type="button" className="btnItemL"><span>btnItemL button</span></button>
					<button type="button" className="btnItemL02"><span>btnItemL02 button</span></button>
					<button type="button" className="btnItemL03"><span>btnItemL03 button</span></button>
					<br /><br />
					<Link to="#" className="btnItemL"><span>btnItemL anchor</span></Link>
					<Link to="#" className="btnItemL02"><span>btnItemL02 anchor</span></Link>
					<Link to="#" className="btnItemL03"><span>btnItemL03 anchor</span></Link>
				</div>
			</RegFoldItemBox>

			<RegFoldItemBox
				title={'Check box style'}
				// helpTip={true}
			>
				<Checkbox
					val={'val01'}
					txt={'check item template'}
					checked={true}
				/>
				<Checkbox
					val={'val02'}
					txt={'check item template02'}
					// checked={true}
				/>
			</RegFoldItemBox>

			<RegFoldItemBox
				title={'radio box style'}
				// helpTip={true}
			>
				<Radiobox
					val={'val01'}
					txt={'check item template'}
					groupName={'radio01'}
					checked={true}
				/>
				<Radiobox
					val={'val02'}
					txt={'check item template02'}
					groupName={'radio01'}
					// checked={true}
				/>
				<Radiobox
					val={'val02'}
					txt={'check item template03'}
					groupName={'radio01'}
					// checked={true}
				/>
				<Radiobox
					val={'val02'}
					txt={'check item template04'}
					groupName={'radio01'}
					// checked={true}
				/>
			</RegFoldItemBox>

			<RegFoldItemBox
				title={'input text box style'}
				// helpTip={true}
			>
				<InputTxt
					maxLeng={9999}
				/>
			</RegFoldItemBox>
		</div>
	);
}

export default FormItem;