import { Link, Outlet, useNavigate } from 'react-router-dom';

function Layout( {onLogout} ) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Call the onLogout function passed as a prop
    navigate('/');
  };

  return (
    <div>
      <nav style={styles.nav}>
        <h3 style={styles.logo}>Health Info System</h3>
        <div style={styles.links}>
          <Link style={styles.link} to="/">Dashboard</Link>
          <Link style={styles.link} to="/programs">Programs</Link>
          <Link style={styles.link} to="/clients">Clients</Link>
          <Link style={styles.link} to="/enroll">Enroll</Link>
          <Link style={styles.link} to="/search">Search Clients</Link>
          <button style={styles.logout} onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  );
}

const styles = {
  nav: {
    background: '#282c34',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    flexWrap: 'wrap'
  },
  logo: {
    margin: 0
  },
  links: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    alignItems: 'center'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  logout: {
    background: '#ff4d4f',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Layout;
// This code defines a `Layout` component for a web application using React Router. It includes a navigation bar with links to different sections of the app (Programs, Clients, Enroll) and a logout button. The `handleLogout` function removes authentication tokens from local storage and redirects the user to the login page. The `Outlet` component is used to render child routes within the main content area. The styles are defined in a JavaScript object for easy customization.
// The `styles` object contains CSS properties for the navigation bar, logo, links, and logout button. The `nav` style sets the background color, padding, and layout of the navigation bar. The `logo` style removes the default margin from the heading. The `links` style arranges the links and logout button in a row with spacing. The `link` style defines the appearance of the links, while the `logout` style customizes the logout button's appearance and behavior.
// The `Layout` component is exported for use in other parts of the application. It serves as a common layout for the application, providing a consistent navigation experience across different pages.
// The `Link` components from React Router are used to navigate between different sections of the app without reloading the page. The `useNavigate` hook is used to programmatically navigate to the login page upon logout. The `Outlet` component allows for nested routing, rendering the appropriate child component based on the current route.
// The `handleLogout` function is called when the logout button is clicked, removing the authentication tokens from local storage and redirecting the user to the login page. The `styles` object contains CSS properties for styling the navigation bar, links, and logout button, ensuring a consistent look and feel across the application.
