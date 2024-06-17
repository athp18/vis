import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const uploadSpreadsheet = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post('/spreadsheets/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const getSpreadsheets = () => {
  return api.get('/spreadsheets');
};

export const getSpreadsheet = (id) => {
  return api.get(`/spreadsheets/${id}`);
};

export const updateSpreadsheet = (id, data) => {
  return api.put(`/spreadsheets/${id}`, data);
};

export const deleteSpreadsheet = (id) => {
  return api.delete(`/spreadsheets/${id}`);
};

export const likeSpreadsheet = (id) => {
    return api.post(`/spreadsheets/${id}/like`);
  };
  
export const commentOnSpreadsheet = (id, comment) => {
    return api.post(`/spreadsheets/${id}/comment`, { comment });
};
  
export const shareSpreadsheet = (id) => {
    return api.post(`/spreadsheets/${id}/share`);
};