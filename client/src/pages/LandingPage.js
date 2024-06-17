import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f8f8;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #666;
`;

const FeatureList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  text-align: center;
`;

const FeatureItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled(Link)`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  margin: 0 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Title>Welcome to SpreadsheetViz</Title>
      <Subtitle>Visualize and Share Your Spreadsheets</Subtitle>
      <FeatureList>
        <FeatureItem>Upload and manage your spreadsheets</FeatureItem>
        <FeatureItem>Create beautiful visualizations</FeatureItem>
        <FeatureItem>Share and collaborate with others</FeatureItem>
      </FeatureList>
      <ButtonContainer>
        <Button to="/user-dashboard">Get Started</Button>
        <Button to="/social-dashboard">Explore</Button>
      </ButtonContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;