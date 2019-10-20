import api from './ApiService'

class DashboardService {
  constructor() {
    this.baseUrl = '/dashboard'
    this.limit = 10
  }

  async fetchAll() {
    try {
      const response = await api.get(`${this.baseUrl}`)
      return response.data
    } catch (err) {
      return []
    }
  }

  async filter(term = '') {
    this.baseUrl = `${this.baseUrl}/filter?term=${term}`
    const response = await this.fetchAll()

    return response
  }
}

export default new DashboardService()
