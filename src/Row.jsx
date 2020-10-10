import React from 'react';

export default function Row({ formOne, formTwo }) {
  return (
    <tbody>
      {Object.keys(formOne).map((key, index) => (
        <tr key={`row-${key + index}`}>
          <td key={key}>{key.toUpperCase()}</td>
          <td key={formOne[key]}>{formOne[key]}</td>
        </tr>
      ))}
      {Object.keys(formTwo).map((key, index) => (
        <tr key={`row-${key + index}`}>
          <td key={key}>{key.toUpperCase()}</td>
          <td key={formTwo[key]}>{formTwo[key]}</td>
        </tr>
      ))}
    </tbody>
  );
}
