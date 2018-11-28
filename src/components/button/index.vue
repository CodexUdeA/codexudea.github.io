<template>
  <component
    :is="component"
    :label="label"
    :url="url"
    :target="target"
  />
</template>

<script>
import buttonTag from './button-tag'
import buttonLink from './button-link'

export default {
  name: 'cta',
  data: function () {
    return {
      component: this.type === 'button'
        ? buttonTag
        : buttonLink
    }
  },
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    url: {
      type: String,
      default: '#'
    },
    target: {
      type: String,
      default: '_self'
    },
    type: {
      type: String,
      default: 'anchor',
      validator: function (value) {
        return ['anchor', 'button'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/vars';
@import '../../styles/mixins';
@import '../../styles/functions';

.button {
  position: relative;
  border-radius: 4px;
  padding: 12px 35px;
  font-size: 20px;
  font-weight: font-weight(normal);
  background-color: color(sunflower);
  color: color(astronaut);
  line-height: 1.2;
  text-decoration: none;
  transition-property: color;
  transition-duration: 0.3s;
  overflow: hidden;

  @include from(small) {
    padding: 16px 35px;
    font-size: 24px;
  }

  &:hover {
    color: color(white);
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    left: 50%;
    top: 50%;
    background-color: lighten(color(astronaut), 10%);
    border-radius: 100%;
    opacity: 0;
    transform-origin: 0 0;
    transform: scale(0) translate(-50%, -20%);
    transition-property: transform, opacity;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1.2) translate(-50%, -50%);
  }
}

.button-label {
  position: relative;
}
</style>
