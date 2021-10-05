<template>
  <section
    id="about"
    class="about"
    :aria-label="title"
  >
    <h1 class="section-title">
      {{ title }}
    </h1>
    <div class="container about_container">
      <div class="about_text-container">
        <p class="about_description">
          {{ description }}
        </p>
      </div>
      <div class="about_image-container">
        <img
          class="about_vector"
          src="../assets/vectors/ReadingDoodle.svg"
          alt=""
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      title: "Sobre nosotros",
      description:
        "Elit dolore elit eu esse qui nostrud excepteur sint est. Ad minim mollit reprehenderit esse ea laborum. Ex et officia aliquip eiusmod dolor proident nisi pariatur esse culpa adipisicing et."
    };
  }
};
</script>

<style lang="scss">
@import "../styles/vars";
@import "../styles/mixins";

.about {
  &_container {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include from(sm) {
      flex-direction: row;
    }
  }

  &_image-container {
    width: 80%;

    @include from(sm) {
      width: 40%;
    }
  }

  &_text-container {
    text-align: center;

    @include from(sm) {
      text-align: left;
      width: 60%;
    }
  }
}
</style>
