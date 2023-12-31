import axios from "axios";

class ApiService {
  url = `https://6529117855b137ddc83e287b.mockapi.io/api/todos`;

  getTodos = async () => {
    try {
      const response = await axios.get(this.url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  getTodo = async (id) => {
    try {
      const response = await axios.get(`${this.url}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  createTodo = async (todo) => {
    try {
      const response = await axios.post(this.url, todo);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  updateTodo = async (id, updatedTodo) => {
    try {
      const response = await axios.put(`${this.url}/${id}`, updatedTodo);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`${this.url}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
}

export default ApiService = new ApiService();
