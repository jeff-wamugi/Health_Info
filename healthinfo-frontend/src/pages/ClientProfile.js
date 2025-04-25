import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';
import { Link } from 'react-router-dom';

function ClientProfile() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    const res = await api.get(`/clients/${id}/profile/`);
    setProfile(res.data);
  };

  useEffect(() => {
    fetchProfile();
  }, [id]);

  const handleRemove = async (enrollmentId) => {
    if (window.confirm("Remove this enrollment?")) {
      await api.delete(`/enrollments/${enrollmentId}/`);
      fetchProfile(); // Refresh
    }
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <h2>{profile.name}'s Profile</h2>
      <p><strong>Age:</strong> {profile.age}</p>
      <p><strong>Gender:</strong> {profile.gender}</p>
      <p><strong>Contact:</strong> {profile.contact}</p>

      <h4>Enrolled Programs</h4>
      <div style={styles.programList}>
        {profile.programs.map((prog) => (
          <div key={prog.enrollment_id} style={styles.programItem}>
            <span>{prog.program_name}</span>
            <button
              onClick={() => handleRemove(prog.enrollment_id)}
              style={styles.removeButton}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      
      <Link to={`/clients/${profile.id}/edit`} style={styles.editButton}>Edit</Link>
    </div>
  );
}

const styles = {
  container: {
    padding: '1rem'
  },
  programList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1rem'
  },
  programItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#f9f9f9',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  removeButton: {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '0.3rem 0.6rem',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  editButton: {
    display: 'inline-block',
    background: '#007bff',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

export default ClientProfile;
