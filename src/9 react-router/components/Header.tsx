import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="card bg-light">
      <div className="card-heading">
        <h2 className="text-center m-3">SEVENTEEN</h2>
        <p>
          <a href="https://www.pledis.co.kr/html/artist/seventeen">SVT</a>
        </p>
        <div className="row">
          <div className="col-12">
            <Link to="/" className="btn btn-success menu">
              Home
            </Link>
            <Link to="/about" className="btn btn-success menu">
              About
            </Link>
            <Link to="/members" className="btn btn-success menu">
              Members
            </Link>
            <Link to="/songs" className="btn btn-success menu">
              Songs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
