import { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

function Clients() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [contact, setContact] = useState('');
  const navigate = useNavigate();

  const createClient = async () => {
    try {
      await api.post('/clients/', {
        name,
        age: parseInt(age),
        gender,
        contact
      });
      alert('Client registered successfully!');
      navigate('/search'); // Redirect to the clients search page after successful registration
    } catch (err) {
      alert('Error registering client');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Register Client</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} required /><br />
      <input placeholder="Age" type="number" onChange={e => setAge(e.target.value)} required /><br />
      <input placeholder="Gender" onChange={e => setGender(e.target.value)} required /><br />
      <input placeholder="Contact Info" onChange={e => setContact(e.target.value)} required /><br />
      <button onClick={createClient}>Register</button>
    </div>
  );
}

export default Clients;
// This code defines a React component for registering clients. It uses the `useState` hook to manage form inputs and the `api` instance to send a POST request to the backend when the "Register" button is clicked. The component includes input fields for the client's name, age,
// and gender, and contact information. When the form is submitted, it sends the data to the backend API and alerts the user upon success or failure. The `parseInt` function is used to ensure that the age is sent as a number.
// The component is exported for use in other parts of the application.