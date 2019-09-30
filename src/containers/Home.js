import React, { Component } from "react";
import Profile from "../components/Profile";
import MainNav from "../components/MainNav";

class Home extends Component {
	render() {
		return (
			<div className="App">
				<div className="sidebar">
					<Profile />
				</div>
				<MainNav />
				<div className="main">
					<h1 className="head-page font-style-2">Profile</h1>
					<p>
						ผมชื่อ ณัฐพล อนะมาน อายุ 32 ปี ปัจจุบันเป็น Front End Developer
						(Freelance)
					</p>
					<p>
						งานที่ผมทำส่วนใหญ่จะดูแลด้าน Front End ของเว็บไซต์ โดยเป็น Landing
						Page หรือ Microsite ทั้งขนาดเล็ก ขนาดใหญ่ ในภาครัฐและภาคเอกชน
						โดยทำงานร่วมกับทีม Designer UX/UI และ Back End Developer
					</p>
					<ul>
						<li>
							โดยจุดเด่นของผมคือเรื่อง HTML CSS มีความชำนาญในเรื่อง Layout
							Responsive และการทำ CSS Animation ประกอบตัวงานให้ดูน่าสนใจ
						</li>
						<li>
							เคยเป็นที่ปรึกษาเกี่ยวกับ UX/UI เบื้องต้นให้กับน้อง ๆ ในทีม Designer
						</li>
						<li>
							มีพื้นฐานการทำเว็บไซต์ด้วย React.js (ประสบการณ์ประมาณ 6 เดือน)
							และกำลังศึกษาเพิ่มเติมอย่างจริงจังเกี่ยวกับ React.js
						</li>
					</ul>
					<p>
						ประสบการณ์ด้าน Front End ทั้งหมดประมาณ 9 ปี ในบริษัท Digital Agency
					</p>
				</div>
			</div>
		);
	}
}

export default Home;
