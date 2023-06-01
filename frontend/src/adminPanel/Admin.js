import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="admin-panel">
      <aside className="sidebar">
        <ul>
          <li>
            <NavLink to="/admin/rooms" activeClassName="active">Rooms</NavLink>
          </li>
          <li>
            <NavLink to="/showroom" >Show Rooms</NavLink>
          </li>
          <li>
            <Link to="/createroom" >Add Room</Link>
          </li>
        </ul>
      </aside>
      {/* Rest of the admin panel content */}
    </div>
  );
};

export default Admin;
