<template>
  <div id="app">
    <div class="welcome">
      <div class="row middle-xs center-xs">
        <div class="col-xs-12">
          <img src="../src/assets/images/logo.svg" alt="codex logo">
          <h1>This project will be amazing!</h1>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
