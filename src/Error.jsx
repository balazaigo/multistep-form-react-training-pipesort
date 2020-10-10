import React from 'react';

function Error({ message }) {
  return message.length > 0 && <p>{message}</p>;
}

export { Error };
