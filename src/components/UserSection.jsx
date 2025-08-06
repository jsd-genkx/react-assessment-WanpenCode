import React from 'react';

function UserSection({ employees }) {
  return (
    <div className="user-section">
      <h2 style={{ fontSize: '36px', marginBottom: '30px', lineHeight: '1.2' }}>
        Generation Thailand<br />
        Home - User Section
      </h2>
      
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
            </tr>
          </thead>
          <tbody>
            {employees && employees.length > 0 ? (
              employees.map((employee, index) => (
                <tr key={employee.id || index} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '15px' }}>{employee.name}</td>
                  <td style={{ padding: '15px' }}>{employee.lastName}</td>
                  <td style={{ padding: '15px' }}>{employee.position}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ padding: '15px', textAlign: 'center', color: '#999' }}>
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

export default UserSection;