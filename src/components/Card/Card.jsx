import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <div className="img-wrap">
        <img
          src="https://3d-mon.com/wp-content/uploads/2021/07/image16.jpeg"
          alt=""
        />
        <div className="card-title">Title</div>
        <div className="card-price">£</div>
      </div>
    </div>
  );
};

export default Card;
