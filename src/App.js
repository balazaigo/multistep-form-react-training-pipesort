import React, { useState } from 'react';

import { Error } from './Error';
import { FormOne, FormTwo } from './Forms';
import Result from './Result';

//import logo from './logo.svg';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    formOne: {},
    formTwo: {},
    formThree: {},
    formFour: {},
  });
  const [activeForm, setActiveForm] = useState(1);
  const [er, setEr] = useState([]);
  console.log('error', er);
  const formHandler = ({ page, data }) => {
    setFormData({ ...formData, [page]: data });
    setActiveForm(activeForm + 1);
    setEr([]);
  };

  const handlePrevious = (formNo) => {
    console.log('formno', formNo);
    setFormData((prev) => ({ ...formData }));
    setActiveForm(formNo);
  };

  console.log('form data', formData);
  return (
    <div>
      {er.length !== 0 &&
        er.map((error) => <Error message={error} key={error} />)}
      {activeForm === 1 && (
        <FormOne formHandler={formHandler} setError={setEr} formData={formData}/>
      )}
      {activeForm === 2 && (
        <FormTwo
          formHandler={formHandler}
          setError={setEr}
          setForm={handlePrevious}
          formData={formData}
        />
      )}
      {activeForm === 3 && <Result>{formData}</Result>}
    </div>
  );
}

export default App;
