import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import './BarChart.css'; // Import the CSS file

const data = [
  {
    country: 'India',
    value: 5
  },
  {
    country: 'UK',
    value: 2
  },
  {
    country: 'Germany',
    value: 10
  },
  {
    country: 'France',
    value: 8
  }
];

const BarChart = () => (
  <div className="bar-chart-container">
    <ResponsiveBar
      data={data}
      keys={['value']}
      indexBy="country"
      margin={{ top: 20, right: 30, bottom: 50, left: 60 }}
      padding={0.3}
      colors={['#1e90ff', '#00bfff']} // Gradient colors can be applied in CSS
      fill={[
        {
          match: '*',
          id: 'gradient',
        },
      ]}
      defs={[
        {
          id: 'gradient',
          type: 'linearGradient',
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1,
          colors: [
            { offset: 0, color: '#1e90ff' },
            { offset: 1, color: '#00bfff' },
          ],
        },
      ]}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Country',
        legendPosition: 'middle',
        legendOffset: 40,
        tickColor: '#ffffff', // White text for ticks
        legendColor: '#ffffff', // White text for legend
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Value',
        legendPosition: 'middle',
        legendOffset: -50,
        tickColor: '#ffffff', // White text for ticks
        legendColor: '#ffffff', // White text for legend
      }}
      theme={{
        axis: {
          ticks: {
            text: {
              fill: '#ffffff' // White text color for axis labels
            }
          },
          legends: {
            text: {
              fill: '#ffffff' // White text color for axis legends
            }
          }
        }
      }}
    />
  </div>
);

export default BarChart;
