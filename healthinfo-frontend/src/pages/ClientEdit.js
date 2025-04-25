import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/api';

function ClientEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [client, setClient] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
  });

  useEffect(() => {
    const fetchClient = async () => {
      const res = await api.get(`/clients/${id}/`);
      setClient(res.data);
    };
    fetchClient();
  }, [id]);

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await api.put(`/clients/${id}/`, client);
    alert('Client information updated successfully!');
    navigate('/clients');
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      await api.delete(`/clients/${id}/`);
      alert('Client deleted successfully!');
      navigate('/clients');
    }
  };

  return (
    <div>
      <h2>Edit Client</h2>
      <input name="name" value={client.name} onChange={handleChange} placeholder="Name" /><br />
      <input name="age" value={client.age} onChange={handleChange} placeholder="Age" /><br />
      <input name="gender" value={client.gender} onChange={handleChange} placeholder="Gender" /><br />
      <input name="contact" value={client.contact} onChange={handleChange} placeholder="Contact" /><br />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete} style={{ marginLeft: '1rem', background: 'red', color: 'white' }}>Delete</button>
    </div>
  );
}

export default ClientEdit;
