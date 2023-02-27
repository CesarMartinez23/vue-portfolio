<script>
export default {
  name: "Card",
  props: {
    week: String,
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="section-header text-center text-black pb-5"></div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-12 col-12">
          <br />
          <br />
          <h2>{{ week }}</h2>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
