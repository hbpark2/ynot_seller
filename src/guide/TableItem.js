import React from 'react';
import PageTitle from 'ui_component/page_title';
import RegFoldItemBox from 'ui_component/regist_folding_box';

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
				title={'className = tblWrap : default text-align left'}
			>
				<div className="tblWrap">
					<table>
						<caption>table sample</caption>
						<colgroup>
							<col style={{'width' : '20%'}} />
							<col style={{'width' : '20%'}} />
							<col style={{'width' : '20%'}} />
							<col style={{'width' : '20%'}} />
							<col style={{'width' : 'auto'}} />
						</colgroup>
						<thead>
							<tr>
								<th>thead01</th>
								<th>thead02</th>
								<th>thead03</th>
								<th>thead04</th>
								<th>thead05</th>
								<th>thead01</th>
								<th>thead02</th>
								<th>thead03</th>
								<th>thead04</th>
								<th>thead05</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>tdead01</td>
								<td>tdead02tdead02tdead02tdead02</td>
								<td>tdead03tdead03tdead03tdead03</td>
								<td>tdead04tdead04tdead04tdead04</td>
								<td>tdead05</td>
								<td>tdead01tdead01tdead01tdead01</td>
								<td>tdead02tdead02tdead02tdead02tdead02</td>
								<td>tdead03</td>
								<td>tdead04</td>
								<td>tdead05</td>
							</tr>
							<tr>
								<td>tdead01</td>
								<td>tdead02</td>
								<td>tdead03</td>
								<td>tdead04</td>
								<td>tdead05</td>
								<td>tdead01</td>
								<td>tdead02</td>
								<td>tdead03</td>
								<td>tdead04</td>
								<td>tdead05</td>
							</tr>
							<tr>
								<td>tdead01</td>
								<td>tdead02</td>
								<td>tdead03</td>
								<td>tdead04</td>
								<td>tdead05</td>
								<td>tdead01</td>
								<td>tdead02</td>
								<td>tdead03</td>
								<td>tdead04</td>
								<td>tdead05</td>
							</tr>
						</tbody>
					</table>
				</div>
			</RegFoldItemBox>
			<RegFoldItemBox
				title={'className = tblWrap_center : default text-align center'}
			>
				<div className="tblWrap_tc">
					<table>
						<caption>table sample</caption>
						<colgroup>
							<col style={{'width' : '20%'}} />
							<col style={{'width' : 'auto'}} />
							<col style={{'width' : 'auto'}} />
							<col style={{'width' : 'auto'}} />
							<col style={{'width' : 'auto'}} />
						</colgroup>
						<thead>
							<tr>
								<th>thead01</th>
								<th>thead02</th>
								<th>thead03</th>
								<th>thead04</th>
								<th>thead05</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>tdead01</td>
								<td>tdead02</td>
								<td>tdead03</td>
								<td>tdead04</td>
								<td>tdead05</td>
							</tr>
							<tr>
								<td>tdead01</td>
								<td>tdead02</td>
								<td>tdead03</td>
								<td>tdead04</td>
								<td>tdead05</td>
							</tr>
							<tr>
								<td>tdead01</td>
								<td>tdead02</td>
								<td>tdead03</td>
								<td>tdead04</td>
								<td>tdead05</td>
							</tr>
						</tbody>
					</table>
				</div>
			</RegFoldItemBox>
			<RegFoldItemBox
				title={'className = tblWrap_right : default text-align right'}
			>
				<div className="tblWrap_tr">
					<table>
						<caption>table sample</caption>
						<colgroup>
							<col style={{'width' : '20%'}} />
							<col style={{'width' : '20%'}} />
							<col style={{'width' : '20%'}} />
							<col style={{'width' : '20%'}} />
							<col style={{'width' : '20%'}} />
						</colgroup>
						<thead>
							<tr>
								<th>thead01</th>
								<th>thead02</th>
								<th>thead03</th>
								<th>thead04</th>
								<th>thead05</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>tdead01</td>
								<td>tdead02</td>
								<td>tdead03</td>
								<td>tdead04</td>
								<td>tdead05</td>
							</tr>
							<tr>
								<td>tdead01</td>
								<td>tdead02</td>
								<td>tdead03</td>
								<td>tdead04</td>
								<td>tdead05</td>
							</tr>
							<tr>
								<td>tdead01</td>
								<td>tdead02</td>
								<td>tdead03</td>
								<td>tdead04</td>
								<td>tdead05</td>
							</tr>
						</tbody>
					</table>
				</div>
			</RegFoldItemBox>
			<RegFoldItemBox
				title={'table nodata'}
			>
				<div className="tblWrap">
					<table>
						<caption>table sample</caption>
						<colgroup>
							<col style={{'width' : '20%'}} />
							<col style={{'width' : '20%'}} />
							<col style={{'width' : '20%'}} />
							<col style={{'width' : '20%'}} />
							<col style={{'width' : '20%'}} />
						</colgroup>
						<thead>
							<tr>
								<th>thead01</th>
								<th>thead02</th>
								<th>thead03</th>
								<th>thead04</th>
								<th>thead05</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td colspan="5">
									<div className="nodata">
										<span className="tit">내용이 없습니다.</span>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</RegFoldItemBox>

		</div>
	);
}

export default TableItem;