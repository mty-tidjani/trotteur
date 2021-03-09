import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
  } from 'axios';
  import StorageManager from './storage.manager';
  
  const instance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
  });
  
  instance.defaults.headers.post['Content-Type'] = 'application/json';
  
  instance.interceptors.request.use(
    (request: AxiosRequestConfig): AxiosRequestConfig => {
      // You can customize the request here like encrypting data before it's sent to the server
      const token: string | null = StorageManager.getUserToken();
  
      if (token) {
        request.headers.common.authorization = `Bearer ${token}`;
      }
  
      return request;
    },
    (error: AxiosError): Promise<AxiosError> => Promise.reject(error)
  );
  
  instance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      // You can customize the response here like decrypting data coming from the server
  
      if (response.data.statusCode === 414) {
        // Code sent back when user has not activated
        console.warn('Your account is not activated!');
      }
  
      return response;
    },
    (error: any): Promise<string> => Promise.reject(error)
  );
  
  export const http = instance;