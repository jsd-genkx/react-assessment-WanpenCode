import { Link } from 'react-router-dom';
function Navigation() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid black' }}>
      <h1>My App</h1>
      <div>
        <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
        <Link to="/owner" style={{ margin: '0 1rem' }}>Owner</Link>
      </div>
    </nav>
  );
}

export default Navigation;