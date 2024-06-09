import React from 'react'
import './css/Page2.css'
import { Link } from 'react-router-dom'
export default function Page2() {


  window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
     document.getElementById('content2').style.animationName="slideleft"
     document.getElementById('content1').style.animationName="slideright"
    
    }})
  
 
  return (
    
<Link to='/page2'>
      <div className="page2">
        <div className="title">
          ABOUT
        </div>

        <div className="contentcontainer">

        <div className="content" id='content2'>
            <li><b>HTML:</b> Proficient in writing semantic and accessible HTML for building robust web pages.</li>
            <li><b>CSS:</b> Skilled in creating responsive and visually appealing layouts using modern CSS techniques.</li>
            <li><b>JavaScript:</b> Experienced in ES6+ JavaScript for developing dynamic and interactive web applications.</li>
            <li><b>React JS:</b> Proficient in building scalable and maintainable front-end applications using React JS.</li>
            <li><b>Tailwind CSS:</b> Experienced in utilizing Tailwind CSS to design and implement efficient and responsive UI components.</li>
          </div>


          <div className="content" id='content1'>
          <span id='name'>
          <b> Hi, i am Aniket Singh👋</b>
            <br />
            <b>Frontend Developer</b> <br /><br />
          </span>
            <span id='info'>
            With 2 years of experience in frontend development, I specialize in creating intuitive and dynamic web interfaces using HTML, CSS, and JavaScript. My expertise includes building scalable and maintainable applications with React.js and designing efficient, responsive UI components with Tailwind CSS. I have successfully developed and maintained multiple web applications, collaborated with cross-functional teams, and continuously adopted new technologies to enhance application performance. I am dedicated to delivering high-quality, user-centric solutions and am eager to contribute to innovative projects. Let's collaborate and build something exceptional together!
            </span>
          </div>

          
        </div>

        <div className="skills">

          <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" alt="Html" /></li>
          <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="Css" /></li>
          <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/330px-Unofficial_JavaScript_logo_2.svg.png" alt="Javascript" /></li>
          <li><img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*x0d41ns8PTQZz4a3VbMrBg.png" alt="React" /></li>
          <li><img src="https://www.drupal.org/files/styles/grid-3-2x/public/project-images/screenshot_361.png?itok=w4CzcWyb" alt="Tailwind" /></li>

        </div>
      </div>
    </Link>
  )
}
