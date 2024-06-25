import React from 'react';
import Carousel from './Carousel.css'

export default function Card() {
  return (
    <div className="d-flex justify-content-start">
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img
          src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="card-img-top"
          alt="..."
          style={{ height: "150px", objectFit: "cover" }} // Adjust image height
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Let's write small text</p>
          <div className='container w-100'>
            <div className="row">
              <div className="col">
                <select className="form-select m-2 bg-success">
                  {Array.from(Array(6), (e, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
              <div className="col">
                <select className="form-select m-2 bg-success">
                  <option value="half">Half</option>
                  <option value="full">Full</option>
                </select>
              </div>
            </div>
            <div className="d-inline h-100 fs-5" style={{ fontWeight: 'bold' }}>Total price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
