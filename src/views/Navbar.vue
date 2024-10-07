<template>
  <div>
    <h1>B8</h1>
    <router-link to="/navbar/dashboard">Dashboard</router-link>
    <router-link to="/navbar/account">Account</router-link>
    <router-link to="/navbar/product">Product</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-active {
  font-weight: bold;
  color: red;
  background-color: rgb(31, 157, 207);
}
</style>
