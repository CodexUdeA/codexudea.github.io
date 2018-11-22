<template>
  <div class="sponsor__card">
      <img v-bind:src="logo" v-bind:alt="sponsor_name">
  </div>
</template>

<script>
export default {
  name: 'sponsor-card',
  props: {
    logo: {
      type: String,
      required: true
    },
    sponsor_name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '../styles/vars';
@import '../styles/mixins';
@import '../styles/functions';

.sponsor__card {
  display: flex;
  align-items: center;
  overflow: hidden;
  margin: 50px;

  & img {
    width: 156px;
  }
}
</style>
