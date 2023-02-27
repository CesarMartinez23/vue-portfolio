<script>
import Card from "../Apuntes/Card.vue";

export default {
  components: {
    Card,
  },
};
</script>
<template>
  <h2 class="ti text-center fw-bold">Calificaciones</h2>
  <Card week="Laboratorio 1">
    <div class="col-lg-8 col-md-8 col-12 ps-lg-5 mt-md-5">
      <div class="about-img">
        <img
          src="../../assets/img/Calificaciones/lab1.png"
          class="img-fluid mt-5"
        />
      </div>
    </div>
  </Card>

  <Card week="Laboratorio 2">
    <div class="col-lg-8 col-md-8 col-12 ps-lg-5 mt-md-5">
      <div class="about-img">
        <img
          src="../../assets/img/Calificaciones/lab1.2.png"
          class="img-fluid mt-5"
        />
      </div>
    </div>
  </Card>

  <Card week="Parcial Teorico">
    <div class="col-lg-8 col-md-8 col-12 ps-lg-5 mt-md-5 mb-5">
      <div class="about-img">
        <img
          src="../../assets/img/Calificaciones/parcial.png"
          class="img-fluid mt-5"
        />
      </div>
    </div>
  </Card>
</template>
<style scoped>
.ti {
  margin-top: 5rem;
}
</style>
