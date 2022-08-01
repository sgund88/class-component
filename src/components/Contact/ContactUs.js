import React from "react";
import { useSelector } from "react-redux";

export default function ContactUs() {
  const data = useSelector((state) => state.user.user);
  return (
    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
      <div className="card p-4">
        <div className=" image d-flex flex-column justify-content-center align-items-center">
          <button className="btn btn-secondary">
            <img
              src="https://i.imgur.com/j0PzcHV.jpeg"
              height="100"
              width="100"
              alt=""
            />
          </button>
          <span className="name mt-3">{data.name}</span>
          <span className="idd">{data.email}</span>
          <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
            <span>
              <i className="fa fa-twitter"></i>
            </span>
            <span>
              <i className="fa fa-facebook-f"></i>
            </span>
            <span>
              <i className="fa fa-instagram"></i>
            </span>
            <span>
              <i className="fa fa-linkedin"></i>
            </span>
          </div>{" "}
          <div className=" px-2 rounded mt-4 date ">
            <span className="join">Joined May,2021</span>
          </div>
        </div>
      </div>
    </div>
  );
}
