<template>
  <div>
    <!-- <h1>Vue router</h1> -->
    <router-link class="home" to="/">Home</router-link>
    <router-link to="/about">about</router-link>
    <!-- <router-link to="/navbar">navbar</router-link> -->
    <!-- <router-link to="/contact">contact</router-link> -->
    <!-- <router-link to="/user/1">1</router-link> -->
    <router-view />
  </div>
</template>

<script setup>
/*
  1. Tổng quan về vue router
  - Là 1 thư viện dành riêng cho vuejs, giúp điều hướng giữa các trang(components) mà ko làm trang đấy reload
  */
/*
 2. Cách cài đặt
 I, khi cài dự án chọn opt vue rouer
 II, Tạo dự án bthg, khi cài đặt sẽ thêm vue router
 */

/*
3. Navigation
  ** Không dùng thẻ a vì nó sẽ làm reload trang
  - Dùng useRouter trong vue-router để chuyển trang
  - R dùng replace hoặc push để chuyển trang

*/
</script>

<style scoped>
.home {
  margin-right: 20px;
}
.router-link-active {
  font-weight: bold;
  color: red;
  background-color: rgb(31, 157, 207);
}
</style>
