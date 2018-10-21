<template>
  <div class="navbar-desktop">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <nav>
      <ul>
        <li>
          <img src="../assets/images/logo.svg" alt="codex logo">
        </li>
        <li>
          CodeX
        </li>
        <li>
          Eventos
        </li>
        <li>
          Heroes
        </li>
        <li>
          Salón de la Fama
        </li>
        <li>
          Equipo
        </li>
        <li>
          Dar una Charla
        </li>
        <li>
          Patrocinadores
        </li>
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
@import url('https://fonts.googleapis.com/css?family=Roboto');

@media screen and (max-width: 640px){
nav {
  background-color: #2C3581;
  position: absolute;
  width: 100%;
}
nav ul{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
nav li{
    color: #ffff;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    position: relative;
}
img{
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
}
}
/*@media screen and (max-width: 1024px) and (min-width: 640px){
//Others screen
nav {
  background-color: #2C3581;
  position: absolute;
  width: 100%;
}
nav ul{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
nav li{
    color: #ffff;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    padding: 5px;
    position: relative;
}
}*/
</style>
