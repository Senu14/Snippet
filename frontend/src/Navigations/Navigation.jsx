import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
   <div className='main-Nav'>
<header>
    <nav>
      <h1>Snippets</h1>
        <Link to="/"><span>Home</span></Link>
        <Link to="/cards"><span>Cards</span></Link>
        <Link to="/products"><span>Products</span></Link>
        <Link to="/formvalidation"><span>FormValidation</span></Link>
        <Link to="/login"><span>LOGIN</span></Link>
    </nav>
</header>
<main>
  <Outlet />
</main>
</div>
  )
 }


export default Navigation;
 