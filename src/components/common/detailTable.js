import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import HalfRating from "./Stars";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#00b074",
    color: theme.palette.common.white,
    fontSize: 21,
    boxShadow: "0px 12px 23px 0px #3E49540A",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    fontWeight: "700",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables(props) {
  const { data } = props;
  console.log(data);
  return (
    <TableContainer
      component={Paper}
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Table
        sx={{ minWidth: 700, background: "transparent" }}
        aria-label="customized table"
      >
        <TableHead sx={{ height: 85, background: "transparent" }}>
          <TableRow>
            <StyledTableCell
              sx={{
                padding: "30px 0 30px 49px ",
                borderTopLeftRadius: "16px",
              }}
            >
              Items
            </StyledTableCell>
            <StyledTableCell align="right">Qty</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell
              sx={{
                padding: "30px 125px 30px 0 ",
                borderTopRightRadius: "16px",
              }}
              align="right"
            >
              Total Price
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ borderBottomLeftRadius: "16px" }}>
          {(data || []).map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell
                sx={{ padding: "30px 0 30px 49px " }}
                component="th"
                scope="row"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "87px",
                      height: "87px",
                      backgroundColor: "#C4C4C4",
                      borderRadius: "8px",
                    }}
                  ></div>
                  <div>
                    <p
                      style={{
                        fontWeight: "600",
                        fontSize: "12px",
                        lineHeight: "18px",
                        color: "#2D9CDB",
                        marginBottom: "5px",
                      }}
                    >
                      MAIN COURSE
                    </p>
                    <p
                      style={{
                        fontWeight: "700",
                        color: "#464255",
                        fontSize: "18px",
                        marginBottom: "10px",
                      }}
                    >
                      {row.name}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <HalfRating stars={row.stars} />
                      <p
                        style={{
                          fontWeight: "700",
                          fontSize: "12px",
                          lineHeight: "18px",
                          color: "#A3A3A3",
                          marginLeft: "15px",
                        }}
                      >
                        ({row.review} review)
                      </p>
                      {console.log(row.review)}
                    </div>
                  </div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">{row.count}x</StyledTableCell>
              <StyledTableCell align="right">${row.price}</StyledTableCell>
              <StyledTableCell
                sx={{ padding: "30px 125px 30px 0 " }}
                align="right"
              >
                ${row.count * row.price}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
