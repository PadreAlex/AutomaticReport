import React, { useEffect, useState } from "react";

import { DATE_FROM, DATE_TO, EXCHANGE_NAME, SECOND_TOKEN_NAME, TOKEN_NAME, LINE_CHART_DATA_FIRST_TOKEN, LINE_CHART_DATA_SECOND_TOKEN, MONTHS_LABELS, BALANCE_VOLUME_TABLE, BALANCE_DATA_TABLE } from "../ApiCaller/ApiDate";

import "./FourthPage.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function FourthPage() {
  const [balancesData, setDataBalances] = useState([]);
  const [balancesVolume, setVolumeBalances] = useState([]);

  useEffect(() => {
    setDataBalances(BALANCE_DATA_TABLE)
    setVolumeBalances(BALANCE_VOLUME_TABLE)
  }, [])
  

  return (
    <div style={{ background: "white" }} className="container">
      <div className="overlap-group">
        <div className="page_number_container">
          <p className="text_page_number">04</p>
        </div>
        <h1 className="text_h1_balance_data">
          <span className="balance_data">BALANCE DATA</span>
        </h1>

        <div className="text_from_balance_data">
          <span className="text_from_span_balance_data" style={{fontWeight: 'bold', fontSize: '2.82vw'}}>
            {EXCHANGE_NAME} {SECOND_TOKEN_NAME} {TOKEN_NAME} from {DATE_FROM} to {DATE_TO}
          </span>
        </div>

        <div>
          <h1 style={{width: "80vw", margin: 'auto', fontSize: "6vh"}}>Balances</h1>
          <TableContainer style={{width: "80vw", margin: '5vh auto'}} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="center">{SECOND_TOKEN_NAME} Balances</TableCell>
                  <TableCell align="center">{TOKEN_NAME} Balances</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {balancesData.map((item, i) => {
                return(
                    <TableRow
                    style={ i % 2 == 0 ? {backgroundColor: '#F1F1F1'} : {}}
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {item.date}
                    </TableCell>
                    <TableCell align="center">{item.balanceSecondToken}</TableCell>
                    <TableCell align="center">{item.balanceFirstToken}</TableCell>
                    </TableRow>
                )
              })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div>
          <h1 style={{width: "80vw", margin: 'auto', fontSize: "6vh"}}>Volume</h1>
          <TableContainer style={{width: "80vw", margin: '5vh auto'}} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="center">{SECOND_TOKEN_NAME} Balances</TableCell>
                  <TableCell align="center">{TOKEN_NAME} Balances</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {balancesVolume.map((item, i) => {
                return(
                  <TableRow
                    style={ i % 2 == 0 ? {backgroundColor: '#F1F1F1'} : {}}
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {item.date}
                    </TableCell>
                    <TableCell align="center">{item.balanceSecondToken}</TableCell>
                    <TableCell align="center">{item.balanceFirstToken}</TableCell>
                    </TableRow>
                )
              })}
              </TableBody>
            </Table>
          </TableContainer>
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
