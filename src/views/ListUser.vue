<template>
  <div>
    <h1>B9</h1>
    <div>
      <div class="user" :key="user.id" v-for="user in users">
        <p>{{ user.name }}</p>
        <button @click="redirect(user.id)">View Detail</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
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

const redirect = (id) => {
  router.push(`/user/${id}`);
};
</script>

<style scoped>
.user {
  background-color: greenyellow;
  width: 30%;
}
</style>
