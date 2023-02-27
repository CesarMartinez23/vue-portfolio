<script>
export default {
  props: {
    title: String,
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="section-header text-center text-black pb-5"></div>
      </div>
    </div>

    <div class="row">
      <!-- Card 1 -->
      <div class="col-12 col-md-12 col-lg-12">
        <div class="card text-black text-center bg-white pb-2">
          <div class="card-body">
            <i class="bi bi-laptop"></i>
            <h3 class="card-title text-uppercase">{{ title }}</h3>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-body {
  font-size: 50px;
}

.card-body i {
  font-size: 20px;
}

@media (max-width: 767px) {
  .card {
    margin-bottom: 30px;
  }
}
</style>
