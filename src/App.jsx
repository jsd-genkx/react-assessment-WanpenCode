import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import AdminHome from './pages/AdminHome';
import UserHome from './pages/UserHome';
import Owner from './pages/Owner';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/user" element={<UserHome />} />
        <Route path="/owner" element={<Owner />} />
      </Routes>
    </>
  );
}

export default App;