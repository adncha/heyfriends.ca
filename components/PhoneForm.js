import React, { useState } from 'react';
import styled from 'styled-components';
// import twilio from 'twilio';

const FormContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Input = styled.input`
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 50%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const PhoneForm = () => {
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('file submitted');
    // Call Twilio API to send message here
    // const client = twilio('YOUR_TWILIO_ACCOUNT_SID', 'YOUR_TWILIO_AUTH_TOKEN');
    // client.messages
    //   .create({
    //     body: 'Hello friend!',
    //     from: 'YOUR_TWILIO_PHONE_NUMBER',
    //     to: `+${countryCode}${phoneNumber}`,
    //   })
    //   .then((message) => console.log(message.sid));
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Select
          value={countryCode}
          onChange={(event) => setCountryCode(event.target.value)}
        >
          <option value="">Select your country code</option>
          <option value="1">+1 (USA)</option>
          <option value="44">+44 (UK)</option>
          <option value="61">+61 (Australia)</option>
          {/* Add more options for other country codes here */}
        </Select>
        <Input
          type="tel"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <Button type="submit">Send Message</Button>
      </Form>
    </FormContainer>
  );
};
