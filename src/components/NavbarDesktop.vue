<template>
  <nav class="navbar-desktop">
    <ul class="navbar-desktop_list">
      <li class="menu-button">
        <i
          class="fa fa-bars"
          aria-hidden="true"
        />
      </li>
      <li class="navbar-desktop-brand">
        <img
          src="../assets/images/logo.svg"
          alt="codex logo"
        >
      </li>
    </ul>
    <ul class="navbar-desktop_list">
      <li class="navbar-desktop-item">
        <a href="#events">Eventos</a>
      </li>
      <li class="navbar-desktop-item">
        <a href="#heroes">Héroes</a>
      </li>
      <li class="navbar-desktop-item">
        <a href="#hall-of-fame">Salón de la Fama</a>
      </li>
      <li class="navbar-desktop-item">
        <a href="#team">Equipo</a>
      </li>
      <li class="navbar-desktop-item">
        <a href="#speaker">Dar una charla</a>
      </li>
      <li class="navbar-desktop-item">
        <a href="#sponsors">Patrocinadores</a>
      </li>
      <li class="navbar-desktop-item">
        <a href="https://github.com/CodexUdeA/codigo-de-conducta">Código de conducta</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavbarDesktop'
}
</script>

<style lang="scss">
@import '../styles/mixins';
@import '../styles/vars';
@import '../styles/functions';

.navbar-desktop {
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 8px 0;
  background-color: color('astronaut');

  a {
    text-decoration: none;
    color: color(white);
    font-size: font('font-16');
  }
}

.navbar-desktop_list {
  display: flex;
  margin: 0;
  padding: 0 16px;

  .menu-button {
    margin: auto 16px;
    margin-left: 0;
    color: color(white);
    font-size: 24px;
  }
}

.navbar-desktop-brand {
  width: 100px;
}

.navbar-desktop-item {
  display: none;
}

@include from('small') {
  .navbar-desktop {
    justify-content: space-around;
  }

  .navbar-desktop-item {
    display: block;
    padding: 10px;
  }

  .navbar-desktop_list {
    justify-content: center;
    align-items: center;

    .menu-button {
      display: none;
    }
  }
}
</style>
