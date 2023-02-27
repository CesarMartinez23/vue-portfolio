<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "../src/components/Navbar/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <Navbar />
  <RouterView />
</template>
