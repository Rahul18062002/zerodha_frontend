import React from "react";

function Universe() {
  return (
    <div className="container" style={{width:"70%"}}>
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="mt-3 fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" width="200px"></img>
          <p className="text-small text-muted mt-2">Thematic investing platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" width="200px"></img>
          <p className="text-small text-muted mt-2">Algo & Strategy platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" width="200px"></img>
          <p className="text-small text-muted mt-2">option trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" width="200px"></img>
          <p className="text-small text-muted mt-2">Asset management</p>
        </div>
        
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" width="200px"></img>
          <p className="text-small text-muted mt-2">Brands trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" width="200px"></img>
          <p className="text-small text-muted mt-2">insurance</p>
        </div>
        
        <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"25%" , margin :"0 auto"}}>Signup for free</button>

      </div>
    </div>
  );
}

export default Universe;
