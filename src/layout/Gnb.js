import React, {useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import Selectbox from 'common/select';
import Searchbox from 'common/searchbox';
import 'simplebar/dist/simplebar.min.css';

const Gnb = () => {
	const itemMenuList = useRef(null);
	// const itemDepth01 = itemMenuList.current.children.children.children;
	
	useEffect(()=>{
		console.log('menuListWrap = ', itemMenuList);
		console.log('menuListWrap = ', itemMenuList.current);
		console.log('childNodes = ', itemMenuList.current.children[0].children);
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