import React, { useState } from "react";
import './App.css';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { Table, TableCell, TableRow, TableBody } from "@mui/material";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import TableDetail from './component/TableDetail';
import SliderMarks from './component/SliderMarks';

ChartJS.register(ArcElement);

const PrettoSlider = styled(Slider)({
  root: { color: 'MediumVioletRed', height: 10 },
  thumb: { height: 25, width: 25, backgroundColor: 'white', border: '3px solid black', marginTop: -9, marginLeft: -9 },
  track: { height: 10, borderRadius: 4 },
  rail: { height: 10, borderRadius: 4 },
});

function App() {
  const [pAmount, setpAmount] = useState(100000);
  const [interest, setinterest] = useState(5);
  const [duration, setDuration] = useState(36);
  const maxValue = 600000;
  const intMax = 7;
  const maxDuration = 48;

  const intr = interest / 700;
  const emi = duration ? Math.round(pAmount * intr / (1 - (Math.pow(1 / (1 + intr), duration)))) : 0;
  const totalAmt = duration * emi;
  var TotalAmountOfCredit = Math.round((emi / intr) * (1 - Math.pow((1 + intr), (-duration))));
  const TotalAmountOfInterest = Math.round(totalAmt - TotalAmountOfCredit);

  return (
    <div className="App">
      <div className="CalApp">
        <h2 className="CalHeading"><u>EMI Calculator</u></h2>
        <div>
          <Typography gutterBottom><strong>Loan amount</strong></Typography>
          <PrettoSlider value={pAmount} marks={SliderMarks.marksAmt} onChange={(event, vAmt) => setpAmount(vAmt)} defaultValue={pAmount} max={maxValue} />
        </div>
        <div>
          <Typography gutterBottom><strong>Rate of Interest</strong></Typography>
          <PrettoSlider value={interest} onChange={(event, vInt) => setinterest(vInt)} defaultValue={interest} max={intMax} />
        </div>
        <div>
          <Typography gutterBottom><strong>Loan tenure</strong></Typography>
          <PrettoSlider value={duration} onChange={(event, vDur) => setDuration(vDur)} defaultValue={duration} max={maxDuration} />
        </div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <TableDetail
                  pAmount={pAmount}
                  totalAmt={totalAmt}
                  interest={interest}
                  duration={duration}
                  emi={emi}
                  TotalAmountOfInterest={TotalAmountOfInterest}
                />
              </TableCell>
              <TableCell>
                <Pie
                  data={{
                    labels: ['Total Interest', 'Total Amount'],
                    datasets: [{
                      data: [TotalAmountOfInterest, pAmount],
                      backgroundColor: ['lightblue', 'blue']
                    }]
                  }}
                  width={150} 
                  height={150} 
                  options={{
                    maintainAspectRatio: false 
                  }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default App;
