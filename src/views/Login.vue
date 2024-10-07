<template>
  <div>
    <h1>B4</h1>
    <div>
      <form action="">
        <h2>Login Account</h2>
        <br />
        <label for="">Your Email</label><br />
        <input type="email" id="email" name="email" required /><br />
        <label for="">Password</label><br />
        <input type="password" /><br />

        <br /><br />
        <button>Create an account</button>
        <p>Already have an account? <b>Register here</b></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>
