import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5" style={{width:"80%"}}>
      <div className="row">
        <div className="col-6 mb-2">
          <img src={imageURL}></img>
        </div>
        <div className="col-6 p-5 mt-4">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg"></img>
            </a>
            <a href={appStore}>
              <img style={{marginLeft:"50px"}} src="media/images/appstoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
