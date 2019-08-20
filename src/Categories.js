import React from 'react'
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className="Categories">
      <h2><Link to="/appliances">Appliances</Link></h2>
      <h2><Link to="/computer">Computer</Link></h2>
      <h2><Link to="/electronics">Electronics</Link></h2>
      <h2><Link to="/mobile">Mobile</Link></h2>
    </div>
  );
}






export default Categories
