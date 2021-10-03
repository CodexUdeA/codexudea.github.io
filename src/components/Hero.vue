<template>
  <div class="hero">
    <div class="hero_container">
      <h1 class="hero_title">
        {{ title }}
      </h1>
      <h2 class="hero_description">
        {{ description }}
      </h2>
    </div>
    <span class="hero_bg section-wave-bg" />
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      title: "Codex UdeA",
      description:
        "Somos una comunidad de estudiantes de la Universidad de Antioquia apasionados por el desarrollo de software"
    };
  }
};
</script>

<style lang="scss">
@import "../styles/vars";
@import "../styles/mixins";

.hero {
  background: linear-gradient(
      to bottom,
      rgba(70, 73, 163, 0.85),
      rgba(70, 73, 163, 0.9)
    ),
    url("../assets/backgrounds/hero-img.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  position: relative;
  min-height: 600px;

  @include from(sm) {
    height: 80vh;
  }

  @include from(md) {
    min-height: 800px;
  }

  &_bg {
    background-image: url("../assets/backgrounds/hero-path.svg");
  }

  &_container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 0 auto;
    max-width: 90%;
    text-align: center;

    @include from(sm) {
      max-width: 80%;
    }

    @include from(lg) {
      max-width: 70%;
    }
  }

  &_title {
    font-weight: 800;
    font-size: 75px;

    @include from(sm) {
      mfont-size: 85px;
    }

    @include from(lg) {
      font-size: 95px;
    }
  }
}
</style>
