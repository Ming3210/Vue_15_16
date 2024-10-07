<template>
  <div>
    <h1>B10</h1>
    <div class="employee" v-for="employee in employees" :key="employee.id">
      <p>{{ employee.name }}</p>
      <p>{{ employee.age }}</p>
      <p>{{ employee.email }}</p>
      <button @click="redirect(employee.id)">View detail</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const employees = [
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
  router.push(`/employees/${id}`);
};
</script>

<style scoped>
.employee {
  background-color: rgb(249, 0, 254);
  width: 30%;
}
</style>
