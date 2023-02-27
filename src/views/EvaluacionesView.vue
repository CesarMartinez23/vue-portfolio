<script>
import Calificaciones from "../components/Evaluaciones/Calificaciones.vue";
import Practicas from "../components/Evaluaciones/Practicas.vue";

export default {
  components: {
    Calificaciones,
    Practicas,
  },
};
</script>

<template>
  <Calificaciones class="mt-5" />
  <br />
  <Practicas class="mt-5" />
</template>
