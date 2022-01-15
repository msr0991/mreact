/** @format */

import React from "react";
import CartWidget from "./CartWidget/CartWidget";

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light menuNav'>
        <div className='container px-4 px-lg-5'>
          <a className='navbar-brand' href='index.html'>
            <img src='#' alt='logo' />
          </a>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 col'>
              <li class='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Portada
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Sobre Nosotros
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Contacto
                </a>
              </li>
            </ul>
            <form className='d-flex'>
              <button
                className='btn btn-secondary dropdown-toggle col'
                type='button'
                id='dropdownMenuButton'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'>
                <i>
                  <CartWidget />
                  Carrito
                </i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
