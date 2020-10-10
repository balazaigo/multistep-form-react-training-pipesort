import React, { useState } from 'react';

//Package Related Component Import
import {
  Button,
  DropDown,
  Fieldset,
  Form,
  Option,
  OptionGroup,
  TextBox,
} from 'react-form-elements';

export default function FormTwo({ formHandler, setError, formData }) {
  const cities = [
    { id: 'ch', name: 'Chennai' },
    { id: 'bl', name: 'Bangalore' },
    { id: 'mu', name: 'Mumbai' },
  ];
  let addressOne, addressTwo, city, pinCode = '';
  const {formTwo} = formData;
  if(Object.keys(formTwo).length > 0){
    addressOne = formTwo.addressOne;
    addressTwo = formTwo.addressTwo;
    city = formTwo.city;
    pinCode = formTwo.pinCode;
  }
  return (
    <>
      <Form
        name='two'
        onSubmit={(data) => {
          if (data.pinCode.length === 6) {
            let obj = { page: 'formTwo', data };
            formHandler(obj);
          }else{
            setError((prevErr) => [...prevErr, 'PinCode Should be equal to 6 digits']);
          }
        }}
      >
        <Fieldset legend='Address'>
          <TextBox
            label='Address One'
            name='addressOne'
            placeholder='Please Enter Your Address'
            required
            initialValue={addressOne}
          />
          <TextBox
            label='Address Two'
            name='addressTwo'
            placeholder='Please Enter your Address'
            initialValue={addressTwo}
          />
          <DropDown
            label='Select Your City'
            data-testid='dd1'
            name='city'
            required
            initialValue={city}
          >
            <OptionGroup label='Metro Cities'>
              {cities.map((city) => (
                <Option initialValue={city.name} key={city.id}>
                  {city.name}
                </Option>
              ))}
            </OptionGroup>
          </DropDown>
          <TextBox
            label='Pin Code'
            name='pinCode'
            placeholder='Please Enter your Pincode'
            type='number'
            initialValue={pinCode}
          />
          <Button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Previous
          </Button>
          <Button
            onClick={(e) => {
              console.info('The button was clicked');
            }}
          >
            Next
          </Button>
        </Fieldset>
      </Form>
    </>
  );
}
