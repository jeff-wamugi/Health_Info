import { useState, useEffect } from 'react';
import api from '../api/api';

function Enroll() {
  const [clients, setClients] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [selectedClient, setSelectedClient] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const clientRes = await api.get('/clients/');
      const programRes = await api.get('/programs/');
      setClients(clientRes.data);
      setPrograms(programRes.data);
    };
    fetchData();
  }, []);

  const enrollClient = async () => {
    try {
      await api.post('/enrollments/', {
        client: selectedClient,
        program: selectedProgram
      });
      alert('Client enrolled in program!');
    } catch (err) {
      alert('Error enrolling client');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Enroll Client in Program</h2>
      <select onChange={(e) => setSelectedClient(e.target.value)} required >
        <option value="">Select Client</option>
        {clients.map(client => (
          <option key={client.id} value={client.id}>{client.name}</option>
        ))}
      </select><br />

      <select onChange={(e) => setSelectedProgram(e.target.value)} required >
        <option value="">Select Program</option>
        {programs.map(program => (
          <option key={program.id} value={program.id}>{program.name}</option>
        ))}
      </select><br />

      <button onClick={enrollClient}>Enroll</button>
    </div>
  );
}

export default Enroll;
// This code defines a React component for enrolling clients in programs. It uses the `useState` and `useEffect` hooks to manage state and fetch data from the backend API. The component includes dropdowns for selecting a client and a program, and a button to enroll the selected client in the selected program. When the button is clicked, it sends a POST request to the backend API with the selected client and program IDs. The component is exported for use in other parts of the application.
// The `useEffect` hook is used to fetch the list of clients and programs when the component mounts. The `setClients` and `setPrograms` functions are used to update the state with the fetched data. The `enrollClient` function handles the enrollment process, sending a POST request to the `/enrollments/` endpoint with the selected client and program IDs. If successful, an alert is shown to the user. If there is an error, it logs the error to the console and shows an alert indicating the failure.
// The component is exported for use in other parts of the application.
// The `selectedClient` and `selectedProgram` state variables are used to store the IDs of the selected client and program, respectively. The `setSelectedClient` and `setSelectedProgram` functions are called when the user selects a client or program from the dropdowns, updating the state accordingly. The `enrollClient` function is called when the "Enroll" button is clicked, sending a POST request to the backend API with the selected client and program IDs. If successful, an alert is shown to the user indicating that the client has been enrolled in the program.
