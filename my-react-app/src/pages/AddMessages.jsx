// AddMessageForm.jsx
import React, { useState } from 'react';

const AddMessages = () => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Message added:', data);
        setText(''); // Clear the input field
      })
      .catch((error) => console.error('Error adding message:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your message"
      />
      <button type="submit">Add Message</button>
    </form>
  );
};

export default AddMessages;
