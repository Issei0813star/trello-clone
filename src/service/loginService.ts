import AxiosService from "@/API/axiosService";

class LoginService {
  public async login(userName: string, password: string) {
    const axiosService: AxiosService = new AxiosService("https://example.com");
    const req: object = {
      userName,
      password,
    };
    await axiosService.post("exampleUrl", req);
  }
}

export default LoginService;
