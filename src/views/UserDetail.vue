<template>
  <div>
    Thông tin user

    <div>
      <p>Tên: {{ currentUser?.name }}</p>
      <p>Email: {{ currentUser?.email }}</p>
      <p>Tuổi : {{ currentUser?.age }}</p>
    </div>
    <router-view />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
let { id } = route.params;

console.log(id, route.params);

console.log(route);
const users = [
  {
    id: 1,
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  },
  {
    id: 2,
    name: "Bob",
    age: 30,
    email: "bob@example.com",
  },
  {
    id: 3,
    name: "Charlie",
    age: 28,
    email: "charlie@example.com",
  },
];

const currentUser = users?.find((user) => user.id == +id);
</script>

<style></style>
