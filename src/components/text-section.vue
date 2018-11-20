<template>
  <div class="center-xs text-section">
    <div v-bind:class="{ 'text-section__title--active': !useButton }" class="col-xs-12 title text-section__title">
      <h1>{{title}}</h1>
    </div>
    <div class="text-section__description">
      <span>{{description}}</span>
    </div>
    <div class ="text-section__button">
      <Button
        v-if="useButton"
        v-bind:label="buttonLabel"
        v-bind:url="buttonUrl"
        class="hero__button"
      />
    </div>
  </div>
</template>

<script>
import Button from './button/index'
export default {
  name: 'text-section',
  components: {
    Button
  },
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    description: {
      type: String,
      required: true,
      default: ''
    },
    useButton: {
      type: Boolean,
      required: true,
      default: false
    },
    buttonLabel: {
      type: String,
      required: false,
      default: ''
    },
    buttonUrl: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/vars';
  @import '../styles/functions';

  .text-section {
    display: flex;
    flex-direction: column;
    background: color(astronaut);
    color: color(white);
    &__title {
      margin-top: 100px;
      &--active {
        color: color(sunflower);
      }
    }
    &__description {
      margin-top: 80px;
      display: flex;
      justify-content: center;
      span {
        max-width: 728px;
        font-size: font(font-16);
      }
    }
    &__button {
      margin: 100px 0;
    }
  }
</style>
