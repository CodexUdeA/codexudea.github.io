<template>
  <div class="navbar-desktop">
    <nav class="navbar-desktop-nav">
      <div class="navbar-desktop-nav-list">
        <li class="navbar-desktop-nav-brand">
          <img src="../assets/images/logo.svg" alt="codex logo">
        </li>
        <li class="navbar-desktop-nav-item">
          <a href="#">Eventos</a>
        </li>
        <li class="navbar-desktop-nav-item">
          <a href="#">Heroes</a>
        </li>
        <li class="navbar-desktop-nav-item">
          <a href="#">Salón de la Fama</a>
        </li>
        <li class="navbar-desktop-nav-item">
          <a href="#">Equipo</a>
        </li>
        <li class="navbar-desktop-nav-item">
          <a href="#">Dar una charla</a>
        </li>
        <li class="navbar-desktop-nav-item">
          <a href="#">Patrocinadores</a>
        </li>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar-desktop'
}
</script>

<style lang="scss">
@import '../styles/mixins';
@import '../styles/vars';
@import '../styles/functions';

.navbar-desktop{
  display: none;
}

@include from('small'){
  .navbar-desktop{
    display: block;

    &-nav {
      width: 100%;
      padding: 20px;
      background-color: color('astronaut');

      &-list {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &-brand {
        margin-right: 50px;
        max-width: 100px;
      }

      &-item {
        padding: 10px;
      }

      a {
        text-decoration: none;
        color: color(white);
        font-size: font('font-16');
      }
    }
  }
}
</style>
