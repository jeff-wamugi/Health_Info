import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/api';

function ProgramEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [program, setProgram] = useState({ name: '', description: '' });

  useEffect(() => {
    const fetchProgram = async () => {
      const res = await api.get(`/programs/${id}/`);
      setProgram(res.data);
    };
    fetchProgram();
  }, [id]);

  const handleChange = (e) => {
    setProgram({ ...program, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await api.put(`/programs/${id}/`, program);
    alert('Program updated successfully!');
    navigate('/');
  };

  const handleDelete = async () => {
    if (window.confirm('Delete this program?')) {
      await api.delete(`/programs/${id}/`);
      alert('Program deleted successfully!');
      navigate('/');
    }
  };

  return (
    <div>
      <h2>Edit Program</h2>
      <input name="name" value={program.name} onChange={handleChange} placeholder="Name"/><br />
      <textarea name="description" value={program.description} onChange={handleChange} placeholder="Description" /><br />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete} style={{ marginLeft: '1rem', background: 'red', color: 'white' }}>Delete</button>
    </div>
  );
}

export default ProgramEdit;