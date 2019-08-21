import React from 'react'
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className="Categories">
      <h2><Link to="/appliances">Appliances</Link> <Link to="/computer">Computer</Link> <Link to="/electronics">Electronics</Link> <Link to="/mobile">Mobile</Link></h2>
      // <h2></h2>

    </div>
  );
}






export default Categories
