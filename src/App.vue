<template>
  <div id="app">
    <div class="welcome row middle-xs center-xs">
      <div class="col-xs-12">
        <img src="../src/assets/images/logo.svg" alt="codex logo">
        <h1>This project will be amazing!</h1>
      </div>
    </div>
    <card />
    <router-view></router-view>
  </div>
</template>

<script>
import card from '../src/components/hero-card'

export default {
  name: 'app',
  components: {
    card
  }
}
</script>

<style lang="scss">
@import './styles/vars';
@import './styles/functions';

.welcome {
  height: 100vh;
  background-color: color(astronaut);
  color: color(sunflower);

  h1 {
    font-weight: bold;
  }
}
</style>
