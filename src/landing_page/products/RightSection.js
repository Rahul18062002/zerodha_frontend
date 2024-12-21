import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 p-5" style={{marginTop:"200px"}}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={learnMore}>Learn More</a>
        </div>
        <div className="col-7">
          <img width="100%" src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
