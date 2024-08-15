import React from 'react';
import './Header.css';
import icon from '../Assets/icons.jpg'
import FiverrLogo from "../Assets/Fiverr-Logo.png"
import dropdown from "../Assets/drpdown.png"

function Header() {
  return (
    <div className="header-row">
        <img className='image-header' style={{width:"90px"}} src={FiverrLogo} alt="" />  

    
      <nav className="fiverr-nav seller-nav-left">
        <ul>
          <li><a href="https://www.fiverr.com/?source=top_nav" className="seller-main-item">Dashboard</a></li>
          <li className="QXQPpo8"><span className="seller-main-item">My Business</span><svg  style={{marginLeft:"10px"}} viewBox="0 0 11 1" xmlns="http://www.w3.org/2000/svg"><path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"/></svg></li>
          <li className="QXQPpo8"><span className="seller-main-item">Growth & Marketing</span><svg style={{marginLeft:"10px"}} viewBox="0 0 11 1" xmlns="http://www.w3.org/2000/svg"><path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"/></svg></li>
          <li className="QXQPpo8"><span className="seller-main-item">Analytics</span><svg style={{marginLeft:"10px"}} viewBox="0 0 11 1" xmlns="http://www.w3.org/2000/svg"><path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"/></svg></li>
          <li className="QXQPpo8"><span className="seller-main-item">More</span><svg style={{marginLeft:"10px"}} viewBox="0 0 11 1" xmlns="http://www.w3.org/2000/svg"><path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"/></svg></li>
        </ul>
      </nav>
      <nav className="fiverr-nav seller-nav-right">
        <ul>
            <img style={{width:"120px",cursor:"pointer"}} src={icon} alt="" />
        </ul>
      </nav>
          <img style={{width:"30px", cursor:"pointer"}} className='dropdown' src={dropdown} alt="" />         
    </div>
  );
}

export default Header;
