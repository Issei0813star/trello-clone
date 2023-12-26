import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

class AxiosService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });

    this.axiosInstance.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    );
  }

  private handleSuccess(response: AxiosResponse) {
    return response;
  }

  private handleError(error: AxiosError) {
    if (error.response) {
      console.error("Server Error:", error.response.data);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }

  public get(url: string) {
    return this.axiosInstance.get(url);
  }

  public post(url: string, data: object) {
    return this.axiosInstance.post(url, data);
  }
}

export default AxiosService;
