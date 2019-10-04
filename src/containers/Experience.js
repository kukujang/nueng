import React, { Component } from "react";
import Profile from "../components/Profile";
import MainNav from "../components/MainNav";
import ExpList from "../components/exp/ExpList";

class Experience extends Component {
	constructor(props) {
		super(props);
		this.state = { exps: "" };
	}

	componentDidMount() {
		this.setState({
			exps: [
				{
					"id": 1,
					"company": "Freelance",
					"when": "May 2019 - Present",
					"photo": "",
					"photo2x": "",
					"desc":"เขียน HTML/CSS จากไฟล์กราฟฟิค (PSD, AI) ที่ได้รับจากดีไซน์เนอร์ โดยเขียนให้แสดงผลรองรับในทุก ๆ อุปกรณ์ และเพิ่ม Javascript Plugin ต่าง ๆ ที่จำเป็น เช่น jquery carousel, jquery validate และเขียน CSS Animation เพิ่มลูกเล่นเข้าไปในชิ้นงาน หลังจากนั้นจึงส่งไฟล์ต่อไปให้ Backend Developer พัฒนาต่อไป - ควมคุมการเขียนสคริปลูกเล่นต่าง ๆ ของเว็บไซต์ให้เป็นไปในทิศทางเดียวกัน หรือตามความต้องการของลูกค้า (Emotion) - ดูแลเรื่อง Layout หลักของเว็บไซต์ แก้ไข ปรับปรุง Bug ต่าง ๆ ที่เกี่ยวกับการแสดงผล - ใช้ SCSS เขียน และ Compile ผ่าน Gulp - ใช้ Git ในการทำงานร่วมกับ Developer ประมานทีมละ 3-4 คน - ใช้ Jira ในการทำงานต่าง ๆ ร่วมกับทีม"
				},
				{
					"id": 2,
					"company": "MCFIVA (Thailand) Co.,Ltd.",
					"when": "Jan 2014 - April 2019",
					"photo": "http://www.nueng.work/api/img/exp/mcfiva.jpg",
					"photo2x": "http://www.nueng.work/api/img/exp/mcfiva@2x.jpg",
					"desc": "เขียน HTML/CSS จากไฟล์กราฟฟิค (PSD, AI) ที่ได้รับจากดีไซน์เนอร์ โดยเขียนให้แสดงผลรองรับในทุก ๆ อุปกรณ์ และเพิ่ม Javascript Plugin ต่าง ๆ ที่จำเป็น เช่น jquery carousel, jquery validate และเขียน CSS Animation เพิ่มลูกเล่นเข้าไปในชิ้นงาน หลังจากนั้นจึงส่งไฟล์ต่อไปให้ Backend Developer พัฒนาต่อไป - ควมคุมการเขียนสคริปลูกเล่นต่าง ๆ ของเว็บไซต์ให้เป็นไปในทิศทางเดียวกัน หรือตามความต้องการของลูกค้า (Emotion) - เขียน HTML สำหรับอีเมล - ดูแลเรื่อง Layout หลักของเว็บไซต์ แก้ไข ปรับปรุง Bug ต่าง ๆ ที่เกี่ยวกับการแสดงผล - เป็นที่ปรึกษา UX/UI ให้กับน้อง ๆ ในทีม Designer - ใช้ SCSS เขียน และ Compile ผ่าน Gulp - ดูแลระบบ CMS (Wordpress, Drupal, CMS พัฒนาเอง) อัปเดตเนื้อหาเว็บไซต์ของลูกค้า - ใช้ Git ในการทำงานร่วมกับ Developer"
				},
				{
					"id": 3,
					"company": "Design Sentiment",
					"when": "Oct 2011 – Dec 2013",
					"photo": "http://www.nueng.work/api/img/exp/design-sentiment.jpg",
					"photo2x": "http://www.nueng.work/api/img/exp/design-sentiment@2x.jpg",
					"desc": "เขียน HTML/CSS จากไฟล์กราฟฟิค (PSD, AI) ที่ได้รับจากดีไซน์เนอร์ และเพิ่ม Javascript Plugin ต่าง ๆ ที่จำเป็น เช่น jquery carousel, jquery validate และเขียน HTML5 เพิ่มลูกเล่นเข้าไปในชิ้นงาน หลังจากนั้นจึงส่งไฟล์ต่อไปให้ Backend Developer พัฒนาต่อไป - ดูแลระบบ CMS (Wordpress, Drupal, CMS พัฒนาเอง) อัปเดตเนื้อหาเว็บไซต์ของลูกค้า - เขียน HTML สำหรับอีเมล"
				},
				{
					"id": 4,
					"company": "Inet Channel",
					"when": "Aug 2010 – Aug 2011",
					"photo": "",
					"photo2x": "",
					"desc": "เขียน HTML/CSS จากไฟล์กราฟฟิค (PSD, AI) ที่ได้รับจากดีไซน์เนอร์ และเพิ่ม Javascript Plugin ต่าง ๆ ที่จำเป็น เช่น jquery carousel, jquery validate หลังจากนั้นจึงส่งไฟล์ต่อไปให้ Backend Developer พัฒนาต่อไป - เขียน HTML สำหรับอีเมล"
				},
				{
					"id": 5,
					"company": "Netcity",
					"when": "May 2010 – Aug 2010",
					"photo": "",
					"photo2x": "",
					"desc": "ออกแบบเว็บไซต์ และเขียน HTML/CSS ส่งต่อให้ PHP Programmer"
				}
			]
		});
	}

	render() {
		return (
			<div className="App">
				<div className="sidebar">
					<Profile />
				</div>
				<MainNav />
				<div className="main">
					<h1 className="head-page font-style-2">Experience</h1>
					<ExpList exps={this.state.exps} />
				</div>
			</div>
		);
	}
}

export default Experience;
