import React, { useState } from 'react';
import Header from './components/Header';
import UploadForm from './components/Upload/UploadForm';
import Results from './components/Results';
import './App.css';

const App = () => {
  const [prediction, setPrediction] = useState('');
  const [error, setError] = useState('');  // New state for storing error messages

  const handleFileSelect = async (file) => {
    // Clear previous results and errors
    setPrediction('');
    setError('');
  
    const formData = new FormData();
    formData.append('file', file); // The 'file' key should match the key expected by your Flask endpoint
  
    try {
      // Make sure to replace the URL with the actual URL of your Flask backend
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      if (result.error) {
        // Handle any errors returned from the Flask app
        setError(`Error: ${result.error}`);
      } else {
        // Update the prediction state with the result
        setPrediction(result.prediction);
      }
    } catch (error) {
      // Handle any network errors and log them to the console
      console.error('Error during file upload and prediction:', error);
      setError('Could not connect to prediction server');
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <UploadForm onFileSelect={handleFileSelect} />
        {error && <div className="error-message">{error}</div>}
        <Results prediction={prediction} />
      </main>
    </div>
  );
};

export default App;
