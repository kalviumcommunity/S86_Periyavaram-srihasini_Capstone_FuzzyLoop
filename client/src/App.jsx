import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'FuzzyLoop'; // 👈 sets the browser tab title
  }, []);

  return (
    <div>
      <h1>Welcome to FuzzyLoop 🐶🐱</h1>
    </div>
  );
}

export default App;
