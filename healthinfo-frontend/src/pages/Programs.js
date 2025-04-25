import { useState } from 'react';
import api from '../api/api';

function Programs() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const createProgram = async () => {
    await api.post('/programs/', { name, description: desc });
    alert('Program created!');
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
