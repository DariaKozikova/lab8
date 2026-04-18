import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const inventoryApi = {
  
  getInventory: async () => {
    try {
      const response = await api.get('/inventory');
      return response.data;
    } catch (error) {
      console.error("Помилка при отриманні списку:", error);
      throw error;
    }
  },

  getInventoryById: async (id) => {
    try {
      const response = await api.get(`/inventory/${id}`);
      return response.data;
    } catch (error) {
      console.error("Помилка при отриманні товару:", error);
      throw error;
    }
  },

  createInventory: async (formData) => {
    try {
      const response = await api.post('/register', formData);
      return response.data;
    } catch (error) {
      console.error("Помилка при створенні:", error);
      throw error;
    }
  },

  updateInventoryText: async (id, data) => {
    try {
      const response = await api.put(`/inventory/${id}`, data);
      return response.data;
    } catch (error) {
      console.error("Помилка при оновленні:", error);
      throw error;
    }
  },

  updateInventoryPhoto: async (id, formData) => {
    try {
      const response = await api.put(`/inventory/${id}/photo`, formData);
      return response.data;
    } catch (error) {
      console.error("Помилка при оновленні фото:", error);
      throw error;
    }
  },

  deleteInventory: async (id) => {
    try {
      const response = await api.delete(`/inventory/${id}`);
      return response.data;
    } catch (error) {
      console.error("Помилка при видаленні:", error);
      throw error;
    }
  }
};