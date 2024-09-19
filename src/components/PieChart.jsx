import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import './PieChart.css'; // Import the CSS file if needed

const data = [
  { id: 'India', label: 'India', value: 30 },
  { id: 'UK', label: 'UK', value: 15 },
  { id: 'Australia', label: 'Australia', value: 25 },
  { id: 'Germany', label: 'Germany', value: 20 },
  { id: 'France', label: 'France', value: 10 }
];

const shadesOfBlue = [
  '#a0c4ff', // Light Blue
  '#7f9cf5', // Medium Light Blue
  '#4689f1', // Medium Blue
  '#2a66e0', // Dark Blue
  '#1e4f8e'  // Very Dark Blue
];

const PieChart = () => (
  <div className="pie-chart-container">
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={shadesOfBlue} // Use the specified shades of blue
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [ ['darker', 0.2] ] }}
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#ffffff" // White text color for radial labels
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#ffffff" // White text color for slice labels
      theme={{
        labels: {
          text: {
            fill: '#ffffff' // White text color for labels
          }
        }
      }}
    />
  </div>
);

export default PieChart;
