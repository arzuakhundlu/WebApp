import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CartBtn() {
  return (
    <>
    <NavLink to='/cart' className='btn btn-outline-primary ms-2'>
    <i className="fa-solid fa-cart-shopping me-1"></i> Cart ()
    </NavLink>
    </>
  )
}
