import { useState } from 'react';
import api from '../api/api';
import { Link } from 'react-router-dom';

function SearchClients() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = async () => {
    const res = await api.get(`/clients/?search=${query}`);
    setResults(res.data);
  };

  return (
    <div>
      <h2>Search Clients</h2>
      <input
        placeholder="Enter client name or contact"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={search}>Search</button>

      <ul>
        {results.map(client => (
          <li key={client.id}>
            {client.name} — <Link to={`/clients/${client.id}/profile`}>View Profile</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchClients;
