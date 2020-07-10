import React, {useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import Selectbox from 'ui_component/selectbox';
import Searchbox from 'ui_component/searchbox';
import 'simplebar/dist/simplebar.min.css';

const Gnb = () => {
	const gnbEl = useRef(null);
	const itemMenuList = useRef(null);
	const btnFold = useRef(null);
	// let itemDepth01;

	const subDepthCloseAll = ()=>{
		const subDepth = document.querySelectorAll(`.${itemMenuList.current.className} .depth02`);
		subDepth.forEach((el)=>{
			el.style.display = 'none';
		});
	}

	// S : 검색영역 selectbox value값 임시 설정
	const selectVal = {
		'val' : ['구매자명', '구매자연락처', '수취인명', '상품번호', '운송장번호']
	}
	// E : 검색영역 selectbox value값 임시 설정

	useEffect(()=>{
		// let itemDepth01 = document.querySelectorAll(`.${itemMenuList.current.className} > ul > li > a`);
		let itemDepth01 = document.querySelectorAll(`.${itemMenuList.current.className} > ul > li > a`);

		itemDepth01.forEach((el)=>{
			el.addEventListener('click', (e)=> {
				e.preventDefault();
				var _this = e.target;
				var _next = _this.nextElementSibling;
				var _nextStyle = _next.style;
				var _liItem = _this.closest('.gnbListBox > ul > li');

				if(_nextStyle.display === '' || _nextStyle.display === 'none') {
					subDepthCloseAll();
					_nextStyle.display = 'block';
					_liItem.classList.add('active');
				}else{
					_nextStyle.display = 'none';
					_liItem.classList.remove('active');
				}
			});
		});

		btnFold.current.querySelector('button').addEventListener('click', (e)=>{
			console.log(e);
			var classList = btnFold.current.classList;
			var containerEl = gnbEl.current.nextElementSibling;
			var hasClass = false;

			classList.forEach((val)=>{
				if(val === 'close') {
					hasClass = true;
				}
				return false;
			});

			if(hasClass) {
				gnbEl.current.style.left = '0';
				classList.remove('close');
				containerEl.style.padding = '55px 0 0 250px';
			}else{
				gnbEl.current.style.left = '-220px';
				classList.add('close');
				containerEl.style.padding = '55px 0 0 30px';

			}

		});
	});

	return (
		<nav id="gnb" ref={gnbEl}>
			<SimpleBar className="gnbInner">
				<div className="gnbTop">
					<div className="userInfo">
						<span className="photo">
							{/* 사용자 선택 이미지 있을경우 img 태그로 넣어줌 */}
							{/* <img src="/resources/images/temp/temp_user_photo.jpg" alt="" /> */}
						</span>
						<strong className="userId">TIIKI</strong>
					</div>
					<div className="searchBox">
						<Selectbox
							defaultVal = {selectVal.val[3]}
							selectVal = {selectVal}
						/>
						<Searchbox></Searchbox>
					</div>
				</div>
				<div className="gnbListBox" ref={itemMenuList}>
					<ul>
						<li>
							<Link to="guide">guide</Link>
							<div className="depth02">
								<ul>
									<li><Link to="guide_item">item guide</Link></li>
									<li><Link to="register_template">register guide</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth02</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth02_01</Link></li>
									<li><Link to="#">depth02_02</Link></li>
									<li><Link to="#">depth02_03</Link></li>
									<li><Link to="#">depth02_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth03</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth03_01</Link></li>
									<li><Link to="#">depth03_02</Link></li>
									<li><Link to="#">depth03_03</Link></li>
									<li><Link to="#">depth03_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth01</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth01_01</Link></li>
									<li><Link to="#">depth01_02</Link></li>
									<li><Link to="#">depth01_03</Link></li>
									<li><Link to="#">depth01_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth02</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth02_01</Link></li>
									<li><Link to="#">depth02_02</Link></li>
									<li><Link to="#">depth02_03</Link></li>
									<li><Link to="#">depth02_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth03</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth03_01</Link></li>
									<li><Link to="#">depth03_02</Link></li>
									<li><Link to="#">depth03_03</Link></li>
									<li><Link to="#">depth03_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth01</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth01_01</Link></li>
									<li><Link to="#">depth01_02</Link></li>
									<li><Link to="#">depth01_03</Link></li>
									<li><Link to="#">depth01_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth02</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth02_01</Link></li>
									<li><Link to="#">depth02_02</Link></li>
									<li><Link to="#">depth02_03</Link></li>
									<li><Link to="#">depth02_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth03</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth03_01</Link></li>
									<li><Link to="#">depth03_02</Link></li>
									<li><Link to="#">depth03_03</Link></li>
									<li><Link to="#">depth03_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth01</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth01_01</Link></li>
									<li><Link to="#">depth01_02</Link></li>
									<li><Link to="#">depth01_03</Link></li>
									<li><Link to="#">depth01_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth02</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth02_01</Link></li>
									<li><Link to="#">depth02_02</Link></li>
									<li><Link to="#">depth02_03</Link></li>
									<li><Link to="#">depth02_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth03</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth03_01</Link></li>
									<li><Link to="#">depth03_02</Link></li>
									<li><Link to="#">depth03_03</Link></li>
									<li><Link to="#">depth03_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth01</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth01_01</Link></li>
									<li><Link to="#">depth01_02</Link></li>
									<li><Link to="#">depth01_03</Link></li>
									<li><Link to="#">depth01_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth02</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth02_01</Link></li>
									<li><Link to="#">depth02_02</Link></li>
									<li><Link to="#">depth02_03</Link></li>
									<li><Link to="#">depth02_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth03</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth03_01</Link></li>
									<li><Link to="#">depth03_02</Link></li>
									<li><Link to="#">depth03_03</Link></li>
									<li><Link to="#">depth03_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth01</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth01_01</Link></li>
									<li><Link to="#">depth01_02</Link></li>
									<li><Link to="#">depth01_03</Link></li>
									<li><Link to="#">depth01_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth02</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth02_01</Link></li>
									<li><Link to="#">depth02_02</Link></li>
									<li><Link to="#">depth02_03</Link></li>
									<li><Link to="#">depth02_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth03</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth03_01</Link></li>
									<li><Link to="#">depth03_02</Link></li>
									<li><Link to="#">depth03_03</Link></li>
									<li><Link to="#">depth03_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth01</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth01_01</Link></li>
									<li><Link to="#">depth01_02</Link></li>
									<li><Link to="#">depth01_03</Link></li>
									<li><Link to="#">depth01_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth02</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth02_01</Link></li>
									<li><Link to="#">depth02_02</Link></li>
									<li><Link to="#">depth02_03</Link></li>
									<li><Link to="#">depth02_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth03</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth03_01</Link></li>
									<li><Link to="#">depth03_02</Link></li>
									<li><Link to="#">depth03_03</Link></li>
									<li><Link to="#">depth03_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth01</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth01_01</Link></li>
									<li><Link to="#">depth01_02</Link></li>
									<li><Link to="#">depth01_03</Link></li>
									<li><Link to="#">depth01_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth02</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth02_01</Link></li>
									<li><Link to="#">depth02_02</Link></li>
									<li><Link to="#">depth02_03</Link></li>
									<li><Link to="#">depth02_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<Link to="#">depth03</Link>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth03_01</Link></li>
									<li><Link to="#">depth03_02</Link></li>
									<li><Link to="#">depth03_03</Link></li>
									<li><Link to="#">depth03_04</Link></li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</SimpleBar>
			<div className="btnFold" ref={btnFold}><button type="button"><em>접기</em></button></div>
		</nav>
	);
}

export default Gnb;