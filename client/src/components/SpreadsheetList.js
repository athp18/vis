import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListContainer = styled.div`
  margin: 2rem;
`;

const ListTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SpreadsheetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
`;

const SpreadsheetCard = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  padding: 1rem;
  text-decoration: none;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SpreadsheetIcon = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 0.5rem;
`;

const SpreadsheetTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const SpreadsheetList = ({ spreadsheets }) => {
  return (
    <ListContainer>
      <ListTitle>Spreadsheets</ListTitle>
      <SpreadsheetGrid>
        {spreadsheets.map((spreadsheet) => (
          <SpreadsheetCard key={spreadsheet.id} to={`/spreadsheets/${spreadsheet.id}`}>
            <SpreadsheetIcon src="/path/to/spreadsheet-icon.png" alt="Spreadsheet Icon" />
            <SpreadsheetTitle>{spreadsheet.title}</SpreadsheetTitle>
          </SpreadsheetCard>
        ))}
      </SpreadsheetGrid>
    </ListContainer>
  );
};

export default SpreadsheetList;