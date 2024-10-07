<template>
  <div>
    Thông tin employee

    <div>
      <p>Tên: {{ currentEmployee?.name }}</p>
      <p>Email: {{ currentEmployee?.email }}</p>
      <p>Tuổi : {{ currentEmployee?.age }}</p>
      <p>Project :</p>
      <button @click="redirect(currentEmployee?.id)">Details</button>
    </div>
    <router-view />
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
let { id } = route.params;
const router = useRouter();

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

const redirect = (id) => {
  router.push(`/employees/${id}/project`);
};

const currentEmployee = employees?.find((employee) => employee.id == +id);
</script>

<style></style>
