import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { Modal } from "react-bootstrap";

function Signup() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const[isLoggedIn,setIsLoggedIn]=useState(false);

  const navigate=useNavigate();
  const handleSignUpClick = (e) => {
    e.preventDefault(); 
    setShowSignUpModal(true);
  };

  const handleCloseModal = () => setShowSignUpModal(false);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-1"></div>
        <div className="col-3">
          <img height={"320px"} src="media/images/signup.png" alt="Sign Up" />
        </div>
        <div className="col-2"></div>
        <div className="col-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3
                className="text-center mb-2"
                style={{
                  color: "rgb(56, 126, 209)",
                  fontSize: "30px",
                  fontWeight: "600",
                }}
              >
                Sign In
              </h3>
              <p className="text-center text-muted mb-4">
                Or track your existing application.
              </p>
              <form>
                <div className="mb-3">
                  <label htmlFor="mobileNumber" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobileNumber"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" onClick={()=>{
setIsLoggedIn(true);
navigate("/dashboard")
                  }} className="btn btn-primary">
                    Continue
                  </button>
                </div>
              </form>
              <div className="text-center mt-3">
                <p className="mb-0">
                  Don’t have an account?{" "}
                  <a
                    href="/signup"
                    className="text-primary"
                    onClick={handleSignUpClick}
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>

      {/* Sign-Up Modal */}
      <Modal show={showSignUpModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobileNumber" className="form-label">
                Mobile Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobileNumber"
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="aadhaarNumber" className="form-label">
                Aadhaar Number
              </label>
              <input
                type="text"
                className="form-control"
                id="aadhaarNumber"
                placeholder="Enter your Aadhaar number"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Signup;