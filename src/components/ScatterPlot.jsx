import React from 'react';
import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import './ScatterPlot.css'; // Import the CSS file

const data = [
  {
    id: 'group A',
    data: [
      { x: 10, y: 20 },
      { x: 15, y: 25 },
      { x: 20, y: 30 },
    ],
  },
  {
    id: 'group B',
    data: [
      { x: 10, y: 5 },
      { x: 15, y: 15 },
      { x: 20, y: 10 },
    ],
  },
];

const ScatterPlot = () => (
  <div className="scatterplot-container">
    <ResponsiveScatterPlot
      data={data}
      margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
      xScale={{ type: 'linear', min: 'auto', max: 'auto' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
      blendMode="multiply"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'X axis',
        legendPosition: 'middle',
        legendOffset: 40,
        tickColor: '#ffffff',
        legendColor: '#ffffff',
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Y axis',
        legendPosition: 'middle',
        legendOffset: -50,
        tickColor: '#ffffff',
        legendColor: '#ffffff',
      }}
      colors={() => '#00bfff'} // Solid light blue color
      theme={{
        axis: {
          ticks: {
            text: {
              fill: '#ffffff' // White text color for axis labels
            }
          },
          grid: {
            line: {
              stroke: 'none', // Remove grid lines
              strokeWidth: 0
            }
          }
        }
      }}
    />
  </div>
);

export default ScatterPlot;
