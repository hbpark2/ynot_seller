import React, {useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import Selectbox from 'ui_component/select';
import Searchbox from 'ui_component/searchbox';
import 'simplebar/dist/simplebar.min.css';

const Gnb = () => {
	const itemMenuList = useRef(null);
	// let itemDepth01;

	const subDepthCloseAll = ()=>{
		const subDepth = document.querySelectorAll(`.${itemMenuList.current.className} .depth02`);
		subDepth.forEach((el)=>{
			el.style.display = 'none';
		});
	}

	useEffect(()=>{
		let itemDepth01 = document.querySelectorAll(`.${itemMenuList.current.className} > ul > li > a`);

		itemDepth01.forEach((el)=>{
			el.addEventListener('click', (e)=> {
				e.preventDefault();
				const _this = e.target;
				const _next = _this.nextElementSibling;
				const _nextStyle = _next.style;

				if(_nextStyle.display === '' || _nextStyle.display === 'none') {
					subDepthCloseAll();
					_nextStyle.display = 'block';
				}else{
					_nextStyle.display = 'none';
				}
			});
		});

	});

	return (
		<nav id="gnb">
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
						<Selectbox></Selectbox>
						<Searchbox></Searchbox>
					</div>
				</div>
				<div className="gnbListBox" ref={itemMenuList}>
					<ul>
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
		</nav>
	);
}

export default Gnb;