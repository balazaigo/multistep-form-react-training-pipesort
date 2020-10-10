import React from 'react';

import Row from './Row';

export default function Result({ children: { formOne, formTwo } }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Answer Submitted</th>
        </tr>
      </thead>
      <Row formOne={formOne} formTwo={formTwo} />
    </table>
  );
}
