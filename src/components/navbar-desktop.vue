<template>
  <div class="navbar-desktop">
    <nav class="navbar-desktop-nav">
      <div class="navbar-desktop-nav-list">
        <li type="button" class="menu-button" @click="toggleNav()">
          <i class="fa fa-bars" aria-hidden="true"/>
        </li>
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

.navbar-desktop-nav {
  width: 100%;
  // padding: 20px 10px;
  background-color: color('astronaut');

  a {
    text-decoration: none;
    color: color(white);
    font-size: font('font-16');
  }
}

.navbar-desktop-nav-list {
  display: flex;
  align-items: center;
  padding: 0 16px;

  .menu-button {
    margin: auto 16px;
    margin-left: 0;
    color: color(white);
    font-size: 24px;
  }
}

.navbar-desktop-nav-brand {
  margin-right: 50px;
  max-width: 100px;
}

.navbar-desktop-nav-item {
  display: none;
}

@include from('small') {
  .navbar-desktop-nav-item {
    display: block;
    padding: 10px;
  }

  .navbar-desktop-nav-list {
    justify-content: center;

    .menu-button {
      display: none;
    }
  }
}
</style>
