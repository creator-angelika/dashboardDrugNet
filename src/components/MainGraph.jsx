import React, { useState, useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';
import './MainGraph.css'; // Ensure this file is properly linked

const MainGraph = () => {
  const generateInitialData = () => {
    const initialValue = 50; // Starting value for the line
    const dataPoints = 7; // Number of data points
    return Array.from({ length: dataPoints }, (_, i) => ({
      x: `2024-01-${i + 1}`,
      y: initialValue + Math.sin(i) * 10 // Simulate initial fluctuation
    }));
  };

  const getNextDate = (currentDate) => {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + 1);
    return date.toISOString().split('T')[0];
  };

  const [data, setData] = useState([
    {
      id: 'Line A',
      data: generateInitialData(),
    },
    {
      id: 'Line B',
      data: generateInitialData(),
    },
    {
      id: 'Line C',
      data: generateInitialData(),
    }
  ]);

  useEffect(() => {
    const updateData = (data) => {
      const lastPoint = data[data.length - 1];
      const newValue = Math.max(0, lastPoint.y + (Math.random() - 0.5) * 5); // Random change
      return [
        ...data.slice(1), // Remove the oldest point
        { x: getNextDate(lastPoint.x), y: newValue } // Add new point
      ];
    };

    const interval = setInterval(() => {
      setData(prevData => prevData.map(line => ({
        ...line,
        data: updateData(line.data)
      })));
    }, 5000); // Update interval every 5 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="main-content">
      <div className="main-graph">
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 70, bottom: 80, left: 80 }} // Increased bottom and left margins
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false
          }}
          axisBottom={{
            orient: 'bottom',
            tickSize: 8,
            tickPadding: 10,
            tickRotation: 0,
            legend: 'Date',
            legendOffset: 60,
            legendPosition: 'middle',
            tickColor: '#ffffff',
            legendColor: '#ffffff',
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 12,
            tickPadding: 10,
            tickRotation: 0,
            legend: 'Value',
            legendOffset: -60, // Increased offset to give more space for labels
            legendPosition: 'middle',
            tickColor: '#ffffff',
            legendColor: '#ffffff',
          }}
          colors={["#00aaff", "#0099ff", "#0077ff"]}
          lineWidth={2}
          pointSize={10}
          pointBorderWidth={2}
          pointColor={{ from: 'color' }}
          enableGridX={false}
          enableGridY={true}
          enablePoints={true}
          theme={{
            axis: {
              ticks: {
                text: {
                  fill: '#ffffff' // White color for axis labels
                }
              },
              legends: {
                text: {
                  fill: '#ffffff' // White color for axis legends
                }
              }
            },
            grid: {
              line: {
                stroke: '#ffffff', // White color for grid lines
                strokeWidth: 0.5
              }
            }
          }}
          motionConfig="gentle" // Smooth transition
        />
      </div>
    </div>
  );
};

export default MainGraph;
