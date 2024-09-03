import React from 'react';
import { Table, TableCell, TableHead, TableRow, TableBody } from '@mui/material';

const TableDetail = (props) => {
  return (
    <Table style={{ width: '100%', border: '2px solid #CCC' }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="ETableCellText"><strong>Principal Amount</strong></TableCell>
          <TableCell className="ETableCellText"><strong>₹</strong>{props.pAmount}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell className="ETableCellText"><strong>Interest Rate (%)</strong></TableCell>
          <TableCell className="ETableCellText">{props.interest}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText"><strong>Loan Tenure (Months)</strong></TableCell>
          <TableCell className="ETableCellText">{props.duration}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText"><strong>Monthly EMI</strong></TableCell>
          <TableCell className="ETableCellText"><strong>₹</strong>{props.emi}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText"><strong>Total Interest Amount</strong></TableCell>
          <TableCell className="ETableCellText"><strong>₹</strong>{props.TotalAmountOfInterest}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableDetail;
