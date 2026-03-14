import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    // Check if userName was saved during login
    const savedUser = localStorage.getItem("userName");
    if (savedUser) {
      setActiveUser(savedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // Remove the name and token
    window.location.reload(); // Refresh to show "Client Login" again
  };

  return (
    <div className='mainbox'>
      <h3 className="logo">
        <Link to="/" className="navlink">kevTrading</Link>
      </h3>

      <ul className='lisall'>
        <li><Link to="/whatwedo" className="navlink">What we do</Link></li>
        <li><Link to="/Ourfirm" className="navlink">Ourfirm</Link></li>
        <li><Link to="/Investment" className="navlink">Investments</Link></li>
      </ul>

      {/* THE LOGIC CHANGE IS HERE */}
      {activeUser ? (
        <div className="user-area" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ color: 'white', fontWeight: 'bold' }}>{activeUser}</span>
          <button className='clintbtn' onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div style={{ display: "flex", gap: "10px" }}>
          <Link to="/login">
            <button className='clintbtn'>Client Login</button>
          </Link>

          <Link to="/signup">
            <button className='clintbtn'>Signup</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Nav;