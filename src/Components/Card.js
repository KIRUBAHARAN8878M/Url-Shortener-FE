import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  let clickCount = () => {
    let sum = 0;
    props.info.forEach((element) => {
      sum += element.count;
    });
    return sum;
  };

  return (
    <div class="card">
      <div class="card-header">URL Shortener</div>
      <div class="card-body">
        <h5 class="card-title">Total URL created : {props.info.length}</h5>
        <p class="card-text">Total number of clicks: {clickCount()} </p>
        <Link to={'/enterurl'} class="btn btn-primary">
          View/Add your URL's
        </Link>
      </div>
    </div>
  );
}

export default Card;
