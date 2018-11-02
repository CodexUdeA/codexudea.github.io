<template>
  <div class="navbar-desktop">
    <nav class="navbar-desktop-nav">
      <div class="row navbar-desktop-nav-list center-sm">
        <li class="navbar-desktop-nav-item col-sm-2 middle-xs"><img src="../assets/images/logo.svg" alt="codex logo"></li>
        <li class="navbar-desktop-nav-item col-sm-1 middle-xs"><a href="#">CodeX</a></li>
        <li class="navbar-desktop-nav-item col-sm-1 middle-xs"><a href="#">Eventos</a></li>
        <li class="navbar-desktop-nav-item col-sm-1 middle-xs"><a href="#">Heroes</a></li>
        <li class="navbar-desktop-nav-item col-sm-1 middle-xs"><a href="#">Salón de la Fama</a></li>
        <li class="navbar-desktop-nav-item col-sm-1 middle-xs"><a href="#">Equipo</a></li>
        <li class="navbar-desktop-nav-item col-sm-1 middle-xs"><a href="#">Dar una Charla</a></li>
        <li class="navbar-desktop-nav-item col-sm-1 middle-xs"><a href="#">Patrocinadores</a></li>
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

@media screen and(max-width: 767px){
  .navbar-desktop{
    display: none;
  }
}

@include from('small'){
.navbar-desktop{
  &-nav {
    width: 100%;
    padding: 20px;
    background-color: color('astronaut');

    &-list {
      margin: 0;
      list-style: none;
      align-items: center;
      padding: 0 0 0 0;
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
