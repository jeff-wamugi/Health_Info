import { useEffect, useState } from 'react';
import api from '../api/api';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [stats, setStats] = useState({ programs: 0, clients: 0 });
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      const programRes = await api.get('/programs/');
      const clientRes = await api.get('/clients/');
      setStats({ programs: programRes.data.length, clients: clientRes.data.length });
      setPrograms(programRes.data);
    };
    fetchStats();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Hello Doctor🩺, Welcome!</h2>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3>Total Programs</h3>
          <p>{stats.programs}</p>
        </div>
        <div style={styles.card}>
          <h3>Total Clients</h3>
          <p>{stats.clients}</p>
        </div>
      </div>

      <h3 style={{ marginTop: '2rem' }}>Programs and Enrollments</h3>
      <div style={styles.programList}>
        {programs.map((program) => (
          <div key={program.id} style={styles.programCard}>
            <h4>{program.name}</h4>
            <p>{program.description}</p>
            <p><strong>Enrollments:</strong> {program.enrollment_count}</p>
            <Link to={`/programs/${program.id}/edit`}>Edit</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '1rem',
  },
  header: {
    marginBottom: '1rem',
    color: 'blue',
    textAlign: 'center',
    fontSize: '2rem',
  },
  cardContainer: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
  },
  card: {
    background: '#f0f2f5',
    padding: '1rem 2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    flex: 1,
    textAlign: 'center',
  },
  programList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
  },
  programCard: {
    background: '#ffffff',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
  }
};

export default Dashboard;
