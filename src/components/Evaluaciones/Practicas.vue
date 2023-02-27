<script>
import Card from "../Apuntes/Card.vue";

export default {
  components: {
    Card,
  },
};
</script>
<template>
  <h2 class="fw-bold text-center">
    <a
      href="http://www.github.com/CesarMartinez23/Practicas_Programacion_IV"
      target="_blank"
      rel="noopener noreferrer"
      >Practicas de Laboratorio <i class="bi bi-github"></i
    ></a>
  </h2>
  <Card week="Practica #1">
    <div class="col-lg-8 col-md-8 col-12 ps-lg-5 mt-md-5">
      <div class="about-img">
        <img
          src="../../assets/img/Practicas/practica1.png"
          class="img-fluid mt-5"
        />
      </div>
    </div>
  </Card>

  <Card week="Practica #2">
    <div class="col-lg-8 col-md-8 col-12 ps-lg-5 mt-md-5">
      <div class="about-img">
        <img
          src="../../assets/img/Practicas/practica2.png"
          class="img-fluid mt-5"
        />
      </div>
    </div>
  </Card>

  <Card week="Practica #3">
    <div class="col-lg-8 col-md-8 col-12 ps-lg-5 mt-md-5 mb-5">
      <div class="about-img">
        <img
          src="../../assets/img/Practicas/practica3.png"
          class="img-fluid mt-5"
        />
      </div>
    </div>
  </Card>

  <Card week="Practica #4 y #5">
    <div class="col-lg-8 col-md-8 col-12 ps-lg-5 mt-md-5 mb-5">
      <div class="about-img">
        <img
          src="../../assets/img/Practicas/practica45.png"
          class="img-fluid mt-5"
        />
      </div>
    </div>
  </Card>
</template>
