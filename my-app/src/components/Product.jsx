import React from 'react';
import { NavLink } from 'react-router-dom';
import  DATA  from '../Data'

function Product() {

  const cardItem = (item) => {
    return (
      <>
      <div className="card" style={{width: "18rem"}}>
  <img src={item.img} className="card-img-top" alt={item.title}/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="lead">{item.price}</p>
    <NavLink href="#" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
      </>
    )
  }

  return (
    <>
    <div className='container py-5'>
      <div className='row'>
        <div className='col-12 text-center'>
          <h1>Product</h1>
          <hr/>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        {DATA.map(cardItem)}
      </div>
    </div>
    </>
  )
};

export default Product;