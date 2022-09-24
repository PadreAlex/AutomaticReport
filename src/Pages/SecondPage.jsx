import React, {useState, useEffect} from "react";
import "./SecondPage.css";
import { DATE_FROM, DATE_TO, EXCHANGE_NAME, SECOND_TOKEN_NAME, TOKEN_NAME, LINE_CHART_DATA_FIRST_TOKEN, LINE_CHART_DATA_SECOND_TOKEN, MONTHS_LABELS } from "../ApiCaller/ApiDate";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  LinearScale,
  PointElement,
  LineElement,
  
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { height } from "@mui/system";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);
const labels = MONTHS_LABELS;

export default function SecondPage() {

    const [firstToken, setFirstTokenData] = useState()
    const [secondToken, setSecondTokenData] = useState()
    
    useEffect(() => {
        setFirstTokenData(TOKEN_NAME)
        setSecondTokenData(SECOND_TOKEN_NAME)
    }, [])
    

    const data = {
      labels: labels,
      datasets: [
        {
          label: firstToken,
          backgroundColor: "rgb(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          data: LINE_CHART_DATA_SECOND_TOKEN,
          fill: true,
          lineTension: 0.3,        
        },
        {
          label: TOKEN_NAME,
          backgroundColor: "rgb(53, 162, 235, 0.2)",
          borderColor: "rgb(53, 162, 235)",
          data: LINE_CHART_DATA_FIRST_TOKEN,
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
  return (
    <div style={{ background: "white", maxHeight: "1768px" }} className="container">
      <div className="overlap-group">
        <div className="page_number_container">
          <p className="text_page_number">02</p>
        </div>
        <h1 className="text_h1_balance_data">
          <span className="balance_data">BALANCE DATA</span>
        </h1>

        <div className="text_from_balance_data">
          <span className="text_from_span_balance_data" style={{fontWeight: 'bold', fontSize: '2.82vw'}}>
            {EXCHANGE_NAME} {SECOND_TOKEN_NAME} {TOKEN_NAME} from {DATE_FROM} to {DATE_TO}
          </span>
        </div>

        <div
          style={{ width: "90vw", height: "100%", margin: "0px auto 0px auto" }}
          className="charts-card"
        >
          <Line options={options} data={data} />
        </div>

        <div
          style={{ width: "90vw", height: "100%", margin: "20vh auto 0px auto" }}
          className="charts-card"
        >
          <Line options={""} data={data} />
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
