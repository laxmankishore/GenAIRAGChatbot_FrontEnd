import { useState } from 'react';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

 const handleSubmit = async () => {
   try {
//      const response = await fetch(`/api/sum?a=${a}&b=${b}`);
     const response = await fetch(`http://3.148.113.146:8080/sum?a=${a}&b=${b}`)
     const data = await response.json(); // changed from .text()
     console.log('Response JSON:', data);
     setResult(data.sum); // use the key from JSON response
   } catch (error) {
     console.error('API error:', error);
     setResult('Error');
   }
 };


  return (
    <div style={{ padding: '2rem' }}>
      <h1>Sum Calculator</h1>
      <input
        placeholder="Enter a"
        value={a}
        onChange={(e) => setA(e.target.value)}
        type="number"
      />
      <input
        placeholder="Enter b"
        value={b}
        onChange={(e) => setB(e.target.value)}
        type="number"
      />
      <button onClick={handleSubmit}>Get Sum</button>

      {result !== null && (
        <p>Result: {result}</p>
      )}
    </div>
  );
}

export default App;
