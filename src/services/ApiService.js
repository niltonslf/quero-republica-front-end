import axios from 'axios'

const api = axios.create({
  baseURL: 'http://webapp152181.ip-45-33-7-164.cloudezapp.io:3333'
})

export default api
