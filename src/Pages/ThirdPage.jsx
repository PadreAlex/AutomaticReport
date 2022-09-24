import React from "react";
import "./SecondPage.css";
import { Bar } from "react-chartjs-2";
import { DATE_FROM, DATE_TO, EXCHANGE_NAME, SECOND_TOKEN_NAME, TOKEN_NAME, BAR_CHART_DATA_FIRST_TOKEN, BAR_CHART_DATA_SECOND_TOKEN } from "../ApiCaller/ApiDate";
import {
  CategoryScale,
  Chart,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, BarElement);
const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: SECOND_TOKEN_NAME,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: BAR_CHART_DATA_SECOND_TOKEN,
      fill: true,
      lineTension: 0.3,        
    },
    {
      label: TOKEN_NAME,
      backgroundColor: "rgb(53, 162, 235)",
      borderColor: "rgb(53, 162, 235)",
      data: BAR_CHART_DATA_FIRST_TOKEN,
      fill: true,
      lineTension: 0.3,
    },
  ],

};
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
  },
};
export default function ThirdPage() {
  return (
    <div style={{ background: "white" }} className="container">
      <div className="overlap-group">
        <div className="page_number_container">
          <p className="text_page_number">03</p>
        </div>
        <h1 className="text_h1_balance_data">
          <span className="balance_data">VOLUME DATA</span>
        </h1>

        <div className="text_from_balance_data">
          <span className="text_from_span_balance_data" style={{fontWeight: 'bold', fontSize: '2.82vw'}}>
            {EXCHANGE_NAME} {SECOND_TOKEN_NAME} {TOKEN_NAME} from {DATE_FROM} to {DATE_TO}
          </span>
        </div>

        <div
          style={{ width: "90vw", margin: "0px auto 0px auto" }}
          className="charts-card"
        >
          <Bar options={options} data={data} />;
        </div>

        <div
          style={{ width: "90vw", margin: "20vh auto 0px auto" }}
          className="charts-card"
        >
          <Bar options={options} data={data} />;
        </div>

        <div className="img_container">
          <img
            className="white-sign-1"
            src={require("./black_sign_small.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}