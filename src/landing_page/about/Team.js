import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-5  text-muted fs-7"
        style={{ lineHeight: "1.8", fontSize: "1em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt=".."
            style={{ borderRadius: "100%", width: "60%" }}
          ></img>
          <h4 className="mt-3">Nithin Kamath</h4>
          <h5 className="mt-3">Founder ,CEO</h5>
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.{" "}
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>
          <p>
            Connect on  
            <a href="" style={{ textDecoration: "none", color: "blue", paddingLeft:"6px"}}>
              Homepage
            </a>{" "}
            /
            <a href="" style={{ textDecoration: "none", color: "blue" ,paddingLeft:"6px"}}>
              TradingQnA
            </a>
            /
            <a href="" style={{ textDecoration: "none", color: "blue" ,paddingLeft:"6px" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;