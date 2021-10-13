<template>
  <section
    id="share"
    class="share"
  >
    <div class="container share_container">
      <img
        class="share_doodle"
        src="../assets/vectors/LovingDoodle.svg"
        alt="share with us"
      >
      <h1 class="share_title">
        {{ title }}
      </h1>
      <p>{{ description }}</p>
      <a
        class="share_cta"
        href="/"
      >{{ buttonDescription }}</a>
    </div>
    <div class="share_bg section-wave-bg " />
  </section>
</template>

<script>
export default {
  name: "Share",
  data() {
    return {
      title: "Quiero dar una charla",
      description:
        "Nos encantaría tenerte como invitadx y escuchar todo lo que tienes para enseñarnos. Todos los temas técnicos y no técnicos relacionados con desarrollo de software son bienvenidos. Completa el siguiente formulario y nos estaremos comunicando contigo.",
      buttonDescription: "Enviar propuesta"
    };
  }
};
</script>

<style lang="scss">
@import "../styles/vars";
@import "../styles/functions";

.share {
  background-color: #d9f9ff;
  text-align: center;
  position: relative;

  &_bg {
    background-image: url("../assets/backgrounds/share-path-2.svg");
  }

  &_container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &_cta {
    background: color(bright-sun);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 15%) 2.4px 2.4px 3.2px;
    color: color(victoria);
    font-weight: 800;
    font-size: 18px;
    padding: 10px 20px;
    text-decoration: none;
  }

  &_doodle {
    max-width: 30%;
  }

  &_title {
    margin: 0;
  }
}
</style>
