<template>
  <div>
    <div v-for="prj in currentEmployee.project" :key="prj.id">
      <h2>{{ prj.name }}</h2>
      <p>{{ prj.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
let { id } = route.params;
const employees = [
  {
    id: 1,
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    project: [
      {
        id: 1,
        name: "Project 1",
        description: "Project 1 description",
      },
      {
        id: 2,
        name: "Project 2",
        description: "Project 2 description",
      },
    ],
  },
  {
    id: 2,
    name: "Bob",
    age: 30,
    email: "bob@example.com",
    project: [
      {
        id: 1,
        name: "Project 3",
        description: "Project 3 description",
      },
      {
        id: 2,
        name: "Project 4",
        description: "Project 4 description",
      },
    ],
  },
  {
    id: 3,
    name: "Charlie",
    age: 28,
    email: "charlie@example.com",
    project: [
      {
        id: 1,
        name: "Project 5",
        description: "Project 5 description",
      },
      {
        id: 2,
        name: "Project 6",
        description: "Project 6 description",
      },
    ],
  },
];

const currentEmployee = employees.find((e) => e.id == +id);
</script>

<style></style>
