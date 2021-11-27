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
          alt="doodle de una persona leyendo un libro"
        >
      </div>
    </div>
    <div class="about_bg section-wave-bg" />
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      title: "Sobre nosotros",
      description:
        "Somos una comunidad de estudiantes de Ingeniería de Sistemas de la Universidad de Antioquia apasionados por el desarrollo de software, nos reunimos para compartir charlas, talleres y conferencias relacionadas con el mundo web y como ser mejores profesionales.",
    };
  },
};
</script>

<style lang="scss">
@import "../styles/vars";
@import "../styles/mixins";

.about {
  position: relative;
  &_bg {
    background-image: url("../assets/backgrounds/share-path-1.svg");
  }

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
