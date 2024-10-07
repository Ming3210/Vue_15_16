<template>
  <div>
    <h1>B3+B11</h1>
    <div>
      <form action="">
        <h2>Create Account</h2>
        <br />
        <label for="">Your Email</label><br />
        <input
          v-model="user.email"
          type="email"
          id="email"
          name="email"
          required
        />
        <br />
        <p v-if="error.email != ``">Invalid Email</p>
        <br />
        <label for="">Password</label><br />
        <input v-model="user.password" type="password" /><br />
        <label for="">Confirm Password</label><br />
        <input v-model="user.confirmPassword" type="password" /><br />
        <br /><br />
        <button>Create an account</button>
        <div>Already have an account? <b>Login here</b></div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const user = ref({
  email: "",
  password: "",
  confirmPassword: "",
});

const error = ref({
  email: "",
  password: "",
  confirmPassword: "",
});
</script>

<style scoped>
input {
  width: 250px;
  border-radius: 4px;
  height: 25px;
}
form {
  background-color: slategray;
  padding: 20px;
  width: 30%;
}
button {
  background-color: skyblue;
  color: white;
  border-radius: 4px;
  width: 100%;
}
p {
  color: red;
}
</style>
