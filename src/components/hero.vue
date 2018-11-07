<template>
  <div class="hero">
    <div class="hero__image">
      <img class="hero__image-img" v-bind:src="image">
    </div>
    <div class="hero__body">
      <h1 class="hero__headline">{{headline}}</h1>
      <h2 class="hero__sub-headline">{{subHeadline}}</h2>
      <p class="hero__description">{{description}}</p>
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
    description: {
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000022;
  color: color(white);
  height: 100vh;

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
      display: block;
      position: absolute;
      width: 120vw;
      height: 120vw;
      border-radius: 100%;
      background-color: rgba(#0D155E, 0.37);
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

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
    flex-basis: 100%;
    padding: 0 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 0;

    @include from(medium) {
      padding: 0;
      flex-basis: 70%;
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

  &__description {
    font-size: 20px;
    line-height: 1.4;
    max-width: 780px;
    font-weight: font-weight(light);
    margin: 20px 0 30px;

    @include from(small) {
      font-size: 26px;
    }
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
