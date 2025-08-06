import { useState } from 'react';

function AdminSection() {
  const [formData, setFormData] = useState({ name: '', lastName: '', position: '' });
  const [users, setUsers] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    setUsers(prevUsers => [...prevUsers, formData]);
    setFormData({ name: '', lastName: '', position: '' });
  };

  const handleDelete = (index) => {
    setUsers(prevUsers => prevUsers.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Generation Thailand Home - Admin Section</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={{ margin: '0 1rem' }}>User Home Section</button>
        <button style={{ margin: '0 1rem' }}>Admin Home Section</button>
      </div>

      <div style={{ margin: '2rem auto', padding: '1rem', border: '1px solid black', width: 'fit-content' }}>
        <h3>Create User Here</h3>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} style={{ margin: '0.5rem' }} />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} style={{ margin: '0.5rem' }} />
        <input type="text" name="position" placeholder="Position" value={formData.position} onChange={handleChange} style={{ margin: '0.5rem' }} />
        <button onClick={handleSave}>Save</button>
      </div>
      
    
      <table style={{ margin: '2rem auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Last Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Position</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.lastName}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.position}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminSection;