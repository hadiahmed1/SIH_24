import React, { useState } from 'react';
import axios from 'axios';

const GOOGLE_MAPS_API_KEY ='AIzaSyDLkAGFrdle0zjzuYr9sY3z_LwImkscqyw'; // Replace with your API key

const DistanceTimeCalculator = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  // Fetch distance and time using Distance Matrix API
  const calculateDistanceAndTime = async () => {
    if (!origin || !destination) {
      alert('Please enter both origin and destination');
      return;
    }

    const apiURL = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
      origin
    )}&destinations=${encodeURIComponent(
      destination
    )}&key=${GOOGLE_MAPS_API_KEY}`;

    try {
      const response = await axios.get(apiURL);
      const data = response.data;

      if (data.rows[0].elements[0].status === 'OK') {
        setDistance(data.rows[0].elements[0].distance.text);
        setDuration(data.rows[0].elements[0].duration.text);
      } else {
        alert('Error fetching distance or time. Please check the locations.');
      }
    } catch (error) {
      console.error('Error fetching data from Google Maps API', error);
      alert('Error fetching data from Google Maps API');
    }
  };

  return (
    <div style={styles.container}>
      <h1> Distance & Time Calculator</h1>

      <div style={styles.inputContainer}>
        
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          placeholder="Enter origin address"
          style={styles.input}
        />
      </div>

      <div style={styles.inputContainer}>
       
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Enter destination address"
          style={styles.input}
        />
      </div>

      <button onClick={calculateDistanceAndTime} style={styles.button}>
        Calculate Distance & Time
      </button>

      {distance && duration && (
        <div style={styles.result}>
          <h3>Results:</h3>
          <p>Distance: {distance}</p>
          <p>Duration: {duration}</p>
        </div>
      )}
    </div>
  );
};

// Basic styles...............
const styles = {
  container: {
    padding: '20px',
    maxWidth: '500px',
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
  },
  inputContainer: {
    marginBottom: '10px',
  },
  input: {
    padding: '10px',
    width: '80%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#1e88e5',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
  result: {
    marginTop: '20px',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '5px',
  },
};

export default DistanceTimeCalculator;
