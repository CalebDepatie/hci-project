import React from 'react';

export default function Card(props) {
  const remaining = parseInt(props.max) - parseInt(props.value);

  return (
  <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-9">
            <div className="d-flex align-items-center align-self-start">
              <h3 className="mb-0">{props.value}</h3>
              <p className="mb-0 font-weight-medium"> / {props.max}</p>
            </div>
          </div>
          <div className="col-9">
            {(remaining <= 0)
              ? <div style={{color: "#fc424a"}}>{Math.abs(remaining)} Exceeding Capacity</div>
              : <div style={{color: "#00d25b"}}>{remaining} Remaining</div>}
          </div>
        </div>
        <h6 className="text-muted font-weight-normal">{props.title}</h6>
      </div>
    </div>
  </div>);
}
