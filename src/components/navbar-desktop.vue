<template>
  <div class="navbar-desktop">
    <nav class="navbar-desktop-nav center-sm">
      <ul class="row navbar-desktop-list col-sm-12">
        <li class="navbar-desktop-item col-sm-2"><img src="../assets/images/logo.svg" alt="codex logo"></li>
        <li class="navbar-desktop-item col-sm-1"><a href="#">CodeX</a></li>
        <li class="navbar-desktop-item col-sm-1"><a href="#">Eventos</a></li>
        <li class="navbar-desktop-item col-sm-1"><a href="#">Heroes</a></li>
        <li class="navbar-desktop-item col-sm-1"><a href="#">Salón de la Fama</a></li>
        <li class="navbar-desktop-item col-sm-1"><a href="#">Equipo</a></li>
        <li class="navbar-desktop-item col-sm-1"><a href="#">Dar una Charla</a></li>
        <li class="navbar-desktop-item col-sm-1"><a href="#">Patrocinadores</a></li>
      </ul>
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
@include from('small'){
.navbar-desktop{
  &-nav {
    width: 100%;
    padding: 1em;
    background-color:color('astronaut');
    position: absolute;

    ul {
      margin: 0;
      list-style: none;
      justify-content:center;
      align-items: center;
    }

    &-item {
      position: relative;
    }

    a{
      text-decoration: none;
      //color: color('white');
      color: #fff;
      font-size: font('font-22');
    }
  }
}

}
</style>
