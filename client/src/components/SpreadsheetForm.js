import React, { useState } from 'react';
import styled from 'styled-components';
import { uploadSpreadsheet } from '../services/api';

const FormContainer = styled.div`
  margin: 2rem;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const SpreadsheetForm = ({ onUploadSuccess }) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
  
        await uploadSpreadsheet(formData);
        console.log('Spreadsheet uploaded successfully');
        onUploadSuccess(); // Invoke the onUploadSuccess prop after successful upload
        // Reset form fields
        setFile(null);
        setTitle('');
      } catch (error) {
        console.error('Error uploading spreadsheet:', error);
      }
    };
  
    return (
      <FormContainer>
        <FormTitle>Upload Spreadsheet</FormTitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="file">Select File:</Label>
            <Input type="file" id="file" accept=".xlsx, .xls" onChange={handleFileChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="title">Title:</Label>
            <Input type="text" id="title" value={title} onChange={handleTitleChange} required />
          </FormGroup>
          <SubmitButton type="submit">Upload</SubmitButton>
        </Form>
      </FormContainer>
    );
  };
  
  export default SpreadsheetForm;