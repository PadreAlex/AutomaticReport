import React from "react";
import "./FirstPage.css";
import { DATE_FROM, DATE_TO } from "../ApiCaller/ApiDate";

export default function FirstPage() {
  return (
    <div className="container">
      <div className="overlap-group">
        <h1 className="text_h1">
          <span className="h1_span" style={{color: 'white'}}>BR GROUP MM REPORT</span>
        </h1>
        <div className="text_from">
          <span className="text_from_span" style={{color: 'white'}}>
            FROM {DATE_FROM} TO {DATE_TO}
          </span>
        </div>

        <div className="img_container">
            <img
            className="white-sign-1"
            src={require("./white_sign_smaller.png")}
            alt=""
            />
        </div>
      </div>
    </div>
  );
}
