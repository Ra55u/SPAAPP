<template>
    <template v-if="shouldShowNavbar">
      <Navbar />
    </template>
    <router-view />
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import { useRoute } from "vue-router";
import { defineProps, computed } from "vue";
const { isAthlete, hasChosen } = defineProps<{
  isAthlete: Boolean;
  hasChosen: Boolean;
}>();

const route = useRoute();

const shouldShowNavbar = computed(() => {
  // Check if the current route is not the homepage
  return route.name !== "Avaleht";
});
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
}

li {
  float: left;
}

li a {
  display: block;
  color: #666;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #ddd;
}

li a.active {
  color: white;
  background-color: #04AA6D;
}
</style>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
}

li {
  float: left;
}

li a {
  display: block;
  color: #666;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #ddd;
}

li a.active {
  color: white;
  background-color: #04AA6D;
}
</style>




