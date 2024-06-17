import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getSpreadsheets, likeSpreadsheet, commentOnSpreadsheet, shareSpreadsheet } from '../services/api';
import SpreadsheetList from '../components/SpreadsheetList';

const DashboardContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SocialDashboard = () => {
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

  const handleLike = async (id) => {
    try {
      await likeSpreadsheet(id);
      fetchSpreadsheets(); // Refresh the spreadsheets after liking
    } catch (error) {
      console.error('Error liking spreadsheet:', error);
    }
  };

  const handleComment = async (id, comment) => {
    try {
      await commentOnSpreadsheet(id, comment);
      fetchSpreadsheets(); // Refresh the spreadsheets after commenting
    } catch (error) {
      console.error('Error commenting on spreadsheet:', error);
    }
  };

  const handleShare = async (id) => {
    try {
      const shareUrl = await shareSpreadsheet(id);
      // Display the share URL to the user or perform any desired action
      console.log('Share URL:', shareUrl);
    } catch (error) {
      console.error('Error sharing spreadsheet:', error);
    }
  };

  return (
    <DashboardContainer>
      <Title>Social Dashboard</Title>
      <SpreadsheetList
        spreadsheets={spreadsheets}
        onLike={handleLike}
        onComment={handleComment}
        onShare={handleShare}
      />
    </DashboardContainer>
  );
};

export default SocialDashboard;