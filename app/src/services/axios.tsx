import axios from 'axios'

const axiosInstance = axios.create()

const errorHandler = (error: any) => {
  return Promise.reject(error)
}

const requestHandler = async (request: any) => {
  return request
}

axiosInstance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error),
)

export default axiosInstance