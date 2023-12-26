import { ref } from "vue";
import LoginService from "@/service/loginService";

export default function useLogin() {
  const userName = ref<string>("");
  const password = ref<string>("");

  const login = () => {
    const loginService = new LoginService();
    loginService.login(userName.value, password.value);
  };
}
