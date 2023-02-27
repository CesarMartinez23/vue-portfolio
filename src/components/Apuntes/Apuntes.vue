<script>
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },
};
</script>

<template>
  <section class="about section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-header text-center text-black pb-5">
            <h2 class="text-uppercase">Apuntes en clases</h2>
          </div>
        </div>
      </div>
    </div>

    <Card week="Semana 1">
      <div class="col-lg-8 col-md-8 col-12 ps-lg-5 mt-md-5">
        <div class="about-img">
          <img
            src="../../assets/img/imgApuntes/Semana1/1.png"
            class="img-fluid mt-5"
          />
        </div>
        <div class="about-img">
          <img
            src="../../assets/img/imgApuntes/Semana1/1.1.png"
            class="img-fluid mt-5"
          />
        </div>
      </div>
    </Card>

    <Card week="Semana 2">
      <div class="col-lg-8 col-md-8 col-12 ps-lg-5 mt-md-5">
        <div class="about-img">
          <img
            src="../../assets/img/imgApuntes/Semana2/2.png"
            class="img-fluid mt-5"
          />
        </div>
        <div class="about-img">
          <img
            src="../../assets/img/imgApuntes/Semana2/2.1.png"
            class="img-fluid mt-5"
          />
        </div>
        <div class="about-img">
          <img
            src="../../assets/img/imgApuntes/Semana2/2.2.png"
            class="img-fluid mt-5"
          />
        </div>
      </div>
    </Card>

    <Card week="Semana 3">
      <div class="col-lg-8 col-md-8 col-12 ps-lg-5 mt-md-5">
        <div class="about-img">
          <img
            src="../../assets/img/imgApuntes/Semana3/3.png"
            class="img-fluid mt-5"
          />
        </div>
        <div class="about-img">
          <img
            src="../../assets/img/imgApuntes/Semana3/3.1.png"
            class="img-fluid mt-5"
          />
        </div>
      </div>
    </Card>

    <Card week="Semana 4">
      <div class="col-lg-8 col-md-8 col-12 ps-lg-5 mt-md-5">
        <div class="about-img">
          <img
            src="../../assets/img/imgApuntes/Semana4/4.png"
            class="img-fluid mt-5"
          />
        </div>
        <div class="about-img">
          <img
            src="../../assets/img/imgApuntes/Semana4/4.1.png"
            class="img-fluid mt-5"
          />
        </div>
      </div>
    </Card>

    <Card week="Semana 5">
      <div class="col-lg-8 col-md-8 col-12 ps-lg-5 mt-md-5">
        <div class="about-img">
          <img
            src="../../assets/img/imgApuntes/Semana5/5.png"
            class="img-fluid mt-5"
          />
        </div>
        <div class="about-img">
          <img
            src="../../assets/img/imgApuntes/Semana5/5.1.png"
            class="img-fluid mt-5"
          />
        </div>
      </div>
    </Card>
  </section>
</template>
