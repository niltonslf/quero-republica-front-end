import api from "./ApiService";

class DashboardService {
  constructor() {
    this.baseUrl = "/republic";
    this.limit = 10;
  }

  async fetchAll() {
    try {
      const response = await api.get(`${this.baseUrl}`);
      return response.data;
    } catch (err) {
      return [];
    }
  }

  async filter(term = "") {
    try {
      const response = await api.get(`${this.baseUrl}/filter?term=${term}`);
      return response.data;
    } catch (error) {
      return [];
    }
  }
}

export default new DashboardService();
