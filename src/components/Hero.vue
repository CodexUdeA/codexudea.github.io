<template>
  <div class="hero">
    <div class="hero__image">
      <img
        class="hero__image-img"
        :src="require('/src/assets/images/hero/bg-hero.jpg')"
      >
    </div>
    <div class="hero__body">
      <h1 class="hero__headline">
        Codex UdeA
      </h1>
      <h2 class="hero__sub-headline">
        Somos estudiantes a los que nos apasiona el desarrollo de software y nos
        reunimos para aprender juntos.
      </h2>
      <Button
        label="Dar una charla"
        url="https://docs.google.com/forms/d/e/1FAIpQLSfyeovAO7oIL4Zj3TdHXKJMKBzTo0d9EVxnpU4PgaEtEb4SxA/viewform"
        target="_blank"
        type="anchor"
        class="hero__button"
      />
    </div>
  </div>
</template>

<script>
import button from "./Button/";

export default {
  name: "Hero",
  components: {
    Button: button,
  },
};
</script>

<style lang="scss">
@import "../styles/vars";
@import "../styles/mixins";
@import "../styles/functions";

.hero {
  align-items: center;
  background-color: #000022;
  color: color(white);
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;

  &,
  &__image {
    min-height: 600px;
  }

  &__image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &::after {
      content: "";
      background-color: rgba(#0d155e, 0.37);
      border-radius: 100%;
      display: block;
      height: 120vw;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 120vw;

      @include from(small) {
        width: 120vh;
        height: 120vh;
      }

      @include from(medium) {
        width: 140vh;
        height: 140vh;
      }
    }
  }

  &__image-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.22;
  }

  &__body {
    align-items: center;
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    padding: 0 15px;
    position: relative;
    text-align: center;
    z-index: 0;

    @include from(medium) {
      flex-basis: 70%;
      padding: 0;
    }
  }

  &__headline,
  &__sub-headline {
    font-size: 30px;
    margin: 0;

    @include from(small) {
      font-size: 36px;
    }

    @include from(medium) {
      font-size: 52px;
    }
  }

  &__headline {
    font-weight: font-weight(bold);
  }

  &__sub-headline {
    font-weight: font-weight(medium);
  }

  &__button {
    margin-top: 1.5rem;

    @include from(small) {
      margin-top: 30px;
    }

    @include from(medium) {
      margin-top: 100px;
    }
  }
}
</style>
