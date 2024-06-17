import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartContainer = styled.div`
  margin-top: 2rem;
`;

const ChartTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const VisualizationChart = ({ data }) => {
  // Prepare the data for the chart
  const chartData = data.slice(1).map((row) => {
    const [category, value] = row;
    return { category, value: parseFloat(value) };
  });

  return (
    <ChartContainer>
      <ChartTitle>Data Visualization</ChartTitle>
      <BarChart width={600} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ChartContainer>
  );
};

export default VisualizationChart;