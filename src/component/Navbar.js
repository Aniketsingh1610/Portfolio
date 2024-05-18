import React from 'react'
import './css/Navbar.css'

export default function Navbar() {
 const onclickHome=()=>{
  window.scrollTo({top:0, behavior: 'smooth'});
 }

 const onclickAbout=()=>{
  window.scrollTo({top:780, behavior: 'smooth'});
}

 const onclickProject=()=>{
  window.scrollTo({top:1650, behavior: 'smooth'});
}

 const onclickContact=()=>{
  window.scrollTo({top:2450, behavior: 'smooth'});
}
  
  return (
    <div className='header'>
      <ul>
        <li onClick={onclickHome}>Home</li>
        <li onClick={onclickAbout}>About</li>
        <li onClick={onclickProject}>Project</li>
        <li onClick={onclickContact}>Contact</li>
      </ul>
    </div>
  )
}
