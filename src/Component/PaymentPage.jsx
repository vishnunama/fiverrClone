import React from 'react';
import './PaymentPage.css';
import PopUp from './PopUp';
import footerimage from '../Assets/footerimg.jpg'


function PaymentPage() {
  return (
    <div className="payment-page">
      <h2 style={{ fontSize: '30px', color: '#404145' }}>Billing and payments</h2>
      <ul className="tab-buttons">
        <li className="tab">
          <a href="https://www.fiverr.com/billing/billing-history" rel="noopener noreferrer">
            Billing history
          </a>
        </li>
        <li className="tab">
          <a href="https://www.fiverr.com/billing/billing-info" rel="noopener noreferrer">
            Billing information
          </a>
        </li>
        <li className="tab">
          <a href="https://www.fiverr.com/billing/balances" rel="noopener noreferrer">
            Available balances
          </a>
        </li>
        <li style={{color:"#1DBF73"}} className="tab active">
          Payment methods
        </li>
      </ul>
      <div className="tab-content">
        <h4 style={{ fontSize: '25px', fontWeight: '600' }}>Payment methods</h4>
        <p >Easily manage your payment methods through our secure system.</p>
        <ul className="saved-methods">
          <PopUp />
        </ul>
      </div>

      <img style={{width:"100%",marginTop:"100px"}} src={footerimage} alt="" />
    </div>
  );
}

export default PaymentPage;
