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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#00b074",
    color: theme.palette.common.white,
    fontSize: 21,
    boxShadow: "0px 12px 23px 0px #3E49540A",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
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

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead sx={{ height: 85 }}>
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
                {row.name}
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
