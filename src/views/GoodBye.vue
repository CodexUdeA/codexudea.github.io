<template>
  <div class="gb">
    <!-- navigation -->
    <div class="gb-navbar">
      <navbar />
      <div class="gb-navbar_bg section-wave-bg" />
    </div>

    <!-- content -->
    <div class="gb-letter">
      <h1 class="section-title">
        Nuestra carta de despedida
      </h1>
      <div class="gb-letter_container">
        <p>27 de Noviembre de 2021</p>
        <p>Hola Amigxs!</p>
        <p>
          Los últimos 5 años han sido maravillosos, hemos aprendido sobre UN
          MONTÓN de temas gracias a grandes invitados que con todo su amor nos
          han enseñado parte de lo que saben. Incluso nosotros (probablemente
          incluso tú) hemos vencido nuestros miedos y nos hemos atrevido a
          pararnos en el escenario de Codex, para compartir con nuestros amigos
          algo de lo que la carrera nos ha enseñado, también nos hemos
          inspirado, reído, y pasado muchos momentos bonitos, que quedarán
          marcados en nuestros corazones como parte de este mágico camino que
          fue la universidad.
        </p>
        <p>
          Para nosotros, su equipo organizador, llegan ahora nuevos retos,
          aprendizajes y experiencias como profesionales. Llegó para nosotros el
          momento de hacer las cosas para las que nos preparamos durante años en
          la Universidad y es por esto, que con el corazón lleno de
          agradecimiento y amor, le damos cierre al proyecto “Codex”.
        </p>
        <p>
          Un abrazo a las empresas, speakers, colaboradores, organizadores y
          asistentes que hicieron parte de este proyecto. Gracias por llenar de
          más aprendizajes nuestro paso por la U.
        </p>
        <p>
          Si quieres saber mas sobre lo que hicimos en el proyecto, puedes
          visitar nuestra
          <a href="https://www.codex.dev">página de estadisticas</a>
        </p>
        <p>Con cariño,</p>
        <p>Angelica, Manuela, Martin, Pilar, Sebastian y Valentina.</p>
        <img
          class="gb-doodle"
          src="../assets/vectors/SwingingDoodle.svg"
        >
      </div>
      <div class="gb-letter_bg section-wave-bg" />
    </div>

    <!-- footer -->
    <bottom />
  </div>
</template>

<script>
import Bottom from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default {
  name: "GoodBye",
  components: {
    Navbar,
    Bottom,
  },
};
</script>

<style lang="scss">
@import "../styles/vars";
@import "../styles/functions";
@import "../styles/mixins";

.gb {
  &-bottom_bg {
    background-image: url("../assets/backgrounds/footer-path.svg");
  }

  &-doodle {
    width: 500px;
  }

  &-letter {
    padding-bottom: 100px;
    position: relative;

    &_bg {
      background-image: url("../assets/backgrounds/footer-path.svg");
    }

    &_container {
      max-width: 100%;
      margin: 0 auto;
      padding: 30px;
      font-family: "Roboto Mono", monospace;
      font-size: 16px;
      line-height: 22px;

      @include from(sm) {
        max-width: 80%;
      }

      @include from(md) {
        max-width: 60%;
      }
    }
  }

  &-navbar {
    height: 150px;
    background: color(half-baked);
    position: relative;

    &_bg {
      background-image: url("../assets/backgrounds/share-path-2.svg");
    }
  }
}
</style>
