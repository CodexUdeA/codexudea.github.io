<template>
  <button class="button">
    <span class="button-label">{{label}}</span>
  </button>
</template>

<script>
export default {
  name: 'button-link',
  props: {
    label: {
      type: String,
      default: 'Label'
    }
  }
}
</script>
