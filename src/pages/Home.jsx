import React, { useState, useEffect } from 'react';
import UserSection from '../components/UserSection';
import AdminSection from '../components/AdminSection';

function Home() {
  const [employees, setEmployees] = useState([]);
  const [currentSection, setCurrentSection] = useState('user');

  useEffect(() => {
    // Mock data สำหรับทดสอบ
    setEmployees([
      { id: 1, name: 'John', lastName: 'Doe', position: 'Developer' },
      { id: 2, name: 'Jane', lastName: 'Smith', position: 'Designer' }
    ]);
  }, []);

  const createEmployee = (employeeData) => {
    const newEmployee = {
      id: Date.now(),
      ...employeeData
    };
    setEmployees([...employees, newEmployee]);
    return true;
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <div className="home-container">
      <h1 className="main-title">
        Generation Thailand<br />
        React - Assessment
      </h1>
      
      <div className="section-buttons">
        <button
          className={`section-btn ${currentSection === 'user' ? 'active' : ''}`}
          onClick={() => setCurrentSection('user')}
        >
          User Home Section
        </button>
        <button
          className={`section-btn ${currentSection === 'admin' ? 'active' : ''}`}
          onClick={() => setCurrentSection('admin')}
        >
          Admin Home Section
        </button>
      </div>

      <div>
        {currentSection === 'user' && (
          <UserSection employees={employees} />
        )}
        {currentSection === 'admin' && (
          <AdminSection 
            employees={employees}
            onCreateEmployee={createEmployee}
            onDeleteEmployee={deleteEmployee}
          />
        )}
      </div>
    </div>
  );
}

export default Home;