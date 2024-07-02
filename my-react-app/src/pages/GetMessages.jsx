// ExampleComponent.jsx
import React, { useEffect, useState } from 'react';

const GetMessages = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/messages')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Messages from backend:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default GetMessages;
