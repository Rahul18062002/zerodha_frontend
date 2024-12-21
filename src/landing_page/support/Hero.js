import React from "react";

function Hero() {
  return (
    <div className="container-fluid" id="supportHero">
      <div className="p-5 pb-3" id="supportWrapper">
        <h1>Support Portal</h1>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-3 pt-0 mt-0">
        <div className="col-1"></div>
        <div className="col-6 p-4" id="supportBoxWrapper">
          <h1 className="pb-3">Search for an answer or browse help topics to create <br/>a ticket</h1>
          <input
            type=""
            className="mb-4"
            placeholder="Eg:how do i activate F&O,why is my order getting rejected..."
          />
          <br/>
          <a style={{marginLeft:0}} href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a><br/>
          <a style={{marginLeft:0}} href="">Kite user manual</a>
        </div>
        <div className="col-5 p-5 ">
          <h1>Featured</h1>
          <ol>
            <li>
              <a href="" style={{lineHeight:"3",letterSpacing:"1px"}}>Rights Entitlements listing in October 2024</a>
            </li>
            <li>
              <a href="">2.Surveillance measure on scrips - October 2024</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
export default Hero;
