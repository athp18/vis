import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getSpreadsheets, deleteSpreadsheet } from '../services/api';
import SpreadsheetList from '../components/SpreadsheetList';
import SpreadsheetForm from '../components/SpreadsheetForm';

const DashboardContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const UserDashboard = () => {
  const [spreadsheets, setSpreadsheets] = useState([]);

  useEffect(() => {
    fetchSpreadsheets();
  }, []);

  const fetchSpreadsheets = async () => {
    try {
      const response = await getSpreadsheets();
      setSpreadsheets(response.data);
    } catch (error) {
      console.error('Error fetching spreadsheets:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteSpreadsheet(id);
      fetchSpreadsheets();
    } catch (error) {
      console.error('Error deleting spreadsheet:', error);
    }
  };

  return (
    <DashboardContainer>
      <Title>User Dashboard</Title>
      <SpreadsheetForm onUploadSuccess={fetchSpreadsheets} />
      <SpreadsheetList spreadsheets={spreadsheets} onDelete={handleDelete} />
    </DashboardContainer>
  );
};

export default UserDashboard;