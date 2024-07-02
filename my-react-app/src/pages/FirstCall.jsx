// ExampleComponent.jsx
import React, { useEffect, useState } from 'react';

const FirstCall = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/hw')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data from backend:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FirstCall;
