<template>
  <div class="hero">
    <div class="hero__image">
      <img class="hero__image-img" v-bind:src="image">
    </div>
    <div class="hero__body">
      <h1 class="hero__headline">{{headline}}</h1>
      <h2 class="hero__sub-headline">{{subHeadline}}</h2>
      <Button
        v-bind:label="cta.label"
        v-bind:url="cta.url"
        v-bind:target="cta.target"
        v-bind:type="cta.type"
        class="hero__button"
      />
    </div>
  </div>
</template>

<script>
import button from './button/'

export default {
  name: 'hero',
  components: {
    'Button': button
  },
  props: {
    image: {
      type: String,
      required: true
    },
    headline: {
      type: String,
      required: true
    },
    subHeadline: {
      type: String,
      required: true
    },
    cta: Object
  }
}
</script>

<style lang="scss">
@import '../styles/vars';
@import '../styles/mixins';
@import '../styles/functions';

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
      content: '';
      background-color: rgba(#0D155E, 0.37);
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
    margin-top: 10px;

    @include from(small) {
      margin-top: 30px;
    }

    @include from(medium) {
      margin-top: 100px;
    }
  }
}
</style>
