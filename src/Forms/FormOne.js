import React, { useState } from 'react';

//Package Related Component Import
//Checkbox,
//ColorInput,
//DateTime,
//DropDown,
//EmailInput,
//DateTime,

import {
  Button,
  Fieldset,
  Form,
  TextBox,
  DateTime,
  RadioGroup,
} from 'react-form-elements';

export default function FormOne({ formHandler, setError, formData }) {
  const {formOne} = formData;
  let firstName, lastName, gender = '';
  let dob = '1995-03-02';
  if(Object.keys(formOne).length > 0){
    firstName = formOne.firstName;
    lastName = formOne.lastName;
    dob = formOne.dob;
    gender = formOne.gender;
  }
  return (
    <div>
      <Form
        name='one'
        onSubmit={(data) => {
          if (data.gender.length !== 0) {
            console.log('gender', data);
            let obj = { page: 'formOne', data };
            formHandler(obj);
          } else {
            setError((prevErr) => [...prevErr, 'Please Choose Gender']);
          }
        }}
      >
        <Fieldset legend='Basic Details'>
          <TextBox
            label='First Name'
            name='firstName'
            placeholder='Please Enter your First Name Here'
            required
            initialValue={firstName}
          />
          <TextBox
            label='Last Name'
            name='lastName'
            placeholder='Please Enter your Last Name Here'
            required
            initialValue={lastName}
          />
          <DateTime
            label='Date Of Birth'
            type='date'
            name='dob'
            initialValue={dob}
          />
          <RadioGroup
            name='gender'
            label='Gender'
            options={[
              { value: 'Male', label: 'Male' },
              { value: 'Female', label: 'Female' },
            ]}
            required
            initialChecked={gender}
          />
          <Button
            onClick={(e) => {
              console.info('The button was clicked');
            }}
          >
            Next
          </Button>
        </Fieldset>
      </Form>
    </div>
  );
}
