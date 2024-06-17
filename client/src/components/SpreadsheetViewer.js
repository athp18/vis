import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getSpreadsheet } from '../services/api';
import VisualizationChart from './VisualizationChart';

const ViewerContainer = styled.div`
  margin: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 0.5rem;
  text-align: left;
  font-weight: bold;
`;

const TableCell = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
`;

const SpreadsheetViewer = () => {
  const { id } = useParams();
  const [spreadsheet, setSpreadsheet] = useState(null);

  useEffect(() => {
    const fetchSpreadsheet = async () => {
      try {
        const response = await getSpreadsheet(id);
        setSpreadsheet(response.data);
      } catch (error) {
        console.error('Error fetching spreadsheet:', error);
      }
    };

    fetchSpreadsheet();
  }, [id]);

  if (!spreadsheet) {
    return <div>Loading...</div>;
  }

  const { title, data } = spreadsheet;

  return (
    <ViewerContainer>
      <Title>{title}</Title>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              {data[0].map((header, index) => (
                <TableHeader key={index}>{header}</TableHeader>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <VisualizationChart data={data} />
    </ViewerContainer>
  );
};

export default SpreadsheetViewer;