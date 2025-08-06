
function UserSection() {
  const users = [
    { name: 'Meow', lastName: 'Whiskers', position: 'CEO of Naps' },
    { name: 'Kitty', lastName: 'Purr', position: 'Food Taster' },
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Generation Thailand Home - User Section</h1>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={{ margin: '0 1rem' }}>User Home Section</button>
        <button style={{ margin: '0 1rem' }}>Admin Home Section</button>
      </div>
      <table style={{ margin: '2rem auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Last Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Position</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.lastName}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserSection;