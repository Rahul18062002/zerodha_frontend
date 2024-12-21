import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row text-center mt-5 p-5 mb-5">
        <h1 className="mb-3">Technology</h1>
        <h4 className="mb-4 text-muted">Sleek, modern, and intuitive trading platforms</h4>
        <p>
          Check out our
          <a
            href=""
            style={{ textDecoration: "none", color: "blue", marginLeft: "5px" }}
          >
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
