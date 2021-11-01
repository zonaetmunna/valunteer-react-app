import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <div>
               <Link className="m-2" to="/home">Home</Link>
               <Link className="m-2" to="/service">service</Link>
               <Link className="m-2" to="/home">user</Link>
          </div>
     );
};

export default Header;