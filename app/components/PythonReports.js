import React, { useEffect, useState } from 'react';

function Reports() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/add')
      .then(response => response.json())
      .then(data => setResult(data.result));
  }, []);

  return (
    <div>
      Result: {result}
    </div>
  );
}

export default Reports;