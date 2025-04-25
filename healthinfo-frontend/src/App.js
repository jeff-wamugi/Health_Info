import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Programs from './pages/Programs';
import Clients from './pages/Clients';
import Enroll from './pages/Enroll';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import SearchClients from './pages/SearchClients';
import ClientProfile from './pages/ClientProfile';  
import ClientEdit from './pages/ClientEdit';
import ProgramEdit from './pages/ProgramEdit';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('accessToken'));

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page (Default) */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />

        {/* Protected Routes with Layout */}
        {isLoggedIn && (
          <Route path="/" element={<Layout onLogout={handleLogout} />}>
            <Route index element={<Dashboard />} />
            <Route path="programs" element={<Programs />} />
            <Route path="clients" element={<Clients />} />
            <Route path="enroll" element={<Enroll />} />
            <Route path="search" element={<SearchClients />} />
            <Route path="clients/:id/profile" element={<ClientProfile />} />
            <Route path="clients/:id/edit" element={<ClientEdit />} />
            <Route path="programs/:id/edit" element={<ProgramEdit />} />
          </Route>
        )}
        
        {/* Redirect to Login if not logged in */}
        {/* This will redirect any route that is not defined above */}
        {/* to the login page */}
        {/* This is a catch-all route */}
        {/* If the user is not logged in, redirect to the login page */}
        {/* This will prevent access to any other routes */}
        {!isLoggedIn && (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
