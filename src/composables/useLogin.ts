import { ref } from "vue";
import LoginService from "@/service/loginService";

export default function useLogin() {
  const userId = ref<string>("");
  const password = ref<string>("");

  const login = () => {
    const loginService = new LoginService();
    loginService.login(userId.value, password.value);
  };

  return {
    userId,
    password,
    login,
  };
}
