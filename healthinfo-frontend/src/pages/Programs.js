import { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

function Programs() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const navigate = useNavigate();

  const createProgram = async () => {
    await api.post('/programs/', { name, description: desc });
    alert('Program created!');
    navigate('/'); // Redirect to the dashboard after successful program creation
  };

  return (
    <div>
      <h2>Create Program</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} required />
      <input placeholder="Description" onChange={(e) => setDesc(e.target.value)} required />
      <button onClick={createProgram}>Create</button>
    </div>
  );
}

export default Programs;
