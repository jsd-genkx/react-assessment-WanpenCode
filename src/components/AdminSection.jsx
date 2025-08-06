import React, { useState } from 'react';

function AdminSection({ employees, onCreateEmployee, onDeleteEmployee }) {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    position: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.lastName || !formData.position) {
      alert('Please fill in all fields');
      return;
    }

    const success = await onCreateEmployee(formData);
    
    if (success) {
      setFormData({ name: '', lastName: '', position: '' });
    }
  };

  const handleDelete = (id, employeeName) => {
    if (window.confirm(`Are you sure you want to delete ${employeeName}?`)) {
      onDeleteEmployee(id);
    }
  };

  return (
    <div className="admin-section">
      <h2 style={{ fontSize: '36px', marginBottom: '30px', lineHeight: '1.2' }}>
        Generation Thailand<br />
        Home - Admin Section
      </h2>
      
      <div style={{ textAlign: 'left', marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Create User Here</h3>
        <form onSubmit={handleSubmit} style={{ 
          display: 'flex', 
          gap: '15px', 
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            style={{ 
              padding: '12px', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              flex: 1
            }}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            style={{ 
              padding: '12px', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              flex: 1
            }}
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={formData.position}
            onChange={handleInputChange}
            style={{ 
              padding: '12px', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              flex: 1
            }}
          />
          <button type="submit" style={{ 
            padding: '12px 24px', 
            backgroundColor: '#6c5ce7', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Save
          </button>
        </form>
      </div>

      <div style={{ textAlign: 'left' }}>
        <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>Table 1</p>
        <table style={{ 
          width: '100%', 
          backgroundColor: 'white', 
          borderCollapse: 'collapse',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Name</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Last Name</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Position</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees && employees.length > 0 ? (
              employees.map((employee, index) => (
                <tr key={employee.id || index} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '15px' }}>{employee.name}</td>
                  <td style={{ padding: '15px' }}>{employee.lastName}</td>
                  <td style={{ padding: '15px' }}>{employee.position}</td>
                  <td style={{ padding: '15px' }}>
                    <button
                      onClick={() => handleDelete(employee.id || index, employee.name)}
                      style={{ 
                        padding: '6px 12px', 
                        backgroundColor: 'transparent', 
                        color: '#dc3545',
                        border: '1px solid #dc3545',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ padding: '15px', textAlign: 'center', color: '#999' }}>
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminSection;