import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5000' });

api.interceptors.response.use(
  res => res,
  err => {
    console.error("API error:", err);
    return Promise.reject(err);
  }
);

export const inventoryApi = {
  getAll: () => api.get('/inventory'),
  getById: (id) => api.get(`/inventory/${id}`),

  create: (formData) => api.post('/register', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  
  updateText: (id, data) => api.put(`/inventory/${id}`, data),

  updatePhoto: (id, file) => {
    const fd = new FormData();
    fd.append('photo', file);
    return api.put(`/inventory/${id}/photo`, fd, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },

  delete: (id) => api.delete(`/inventory/${id}`),
};