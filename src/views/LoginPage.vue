<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="userId">UserId:</label>
      <input type="text" id="userId" v-model="userId" required />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import useLogin from "@/composables/useLogin";

export default defineComponent({
  setup() {
    const { userId, password, login } = useLogin();

    return {
      userId,
      password,
      login,
    };
  },
});
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input {
  padding: 8px;
  margin-bottom: 10px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}
</style>
