import React from 'react';
import './Header.css';
import icon from '../Assets/icons.jpg'
import FiverrLogo from "../Assets/Fiverr-Logo.png"

function Header() {
  return (
    <div className="header-row">
        <img style={{width:"90px"}} src={FiverrLogo} alt="" />  

      {/* <a href="/users/vishnumeta/seller_dashboard" className="site-logo">
        <svg width={89} height={27} viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g fill="#404145">
        </g>
<img src={FiverrLogo} alt="" />  
          <g fill="#1dbf73">
            <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"/>
          </g>
        </svg>
      </a> */}
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
          {/* <li className="QXQPpo8"><button className="seller-main-icon"><svg width={22} height={21} viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14.141 2.936C13.356 2.244 12.288 1.85 11 1.85c-1.288 0-2.356.394-3.141 1.086-.765.675-1.291 1.623-1.518 2.74-.216 1.063-.238 2.292-.196 3.506.041 1.201.123 2.399.23 3.428.107 1.04.264 1.926.444 2.604h6.36c.18-.678.337-1.564.444-2.604.107-1.03.189-2.227.23-3.428.042-1.214.02-2.443-.196-3.506-.227-1.117-.753-2.065-1.518-2.74zm2.119-.193c.558.49 1.002 1.07 1.318 1.749.32.688.563 1.485.72 2.37.237 1.166.26 2.522.217 3.772-.043 1.246-.128 2.54-.238 3.704-.112 1.153-.29 2.19-.535 2.964-.522 1.57-1.596 2.624-3.144 2.624H7.362c-1.548 0-2.622-1.054-3.144-2.624-.245-.775-.423-1.811-.535-2.964-.11-1.163-.195-2.458-.238-3.704-.043-1.25-.02-2.606.217-3.772.157-.885.4-1.682.72-2.37.316-.68.76-1.259 1.318-1.749C6.644 1.415 8.186.85 11 .85c2.814 0 4.356.565 5.26 1.893zM13.5 17.85h-5v2h5v-2z" fill="#404145"/></svg></button></li> */}
          {/* <li className="nFghBOe">
            <div className="vN3S32e">
              <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f1b60d49e85b5d17c9eb08e11a666b0f-1688150949650/4e5c1b9e-6a92-4076-a2b1-b7923205f041.png" alt="User profile"/>
              <span className="i_NQop6" />
            </div>
            <svg width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z" fill="#62646A"/></svg>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
