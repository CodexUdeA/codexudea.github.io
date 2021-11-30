<template>
  <section
    id="announcement"
    class="announcement"
  >
    <div class="container announcement_container">
      <img
        class="announcement_doodle"
        src="../assets/vectors/LovingDoodle.svg"
        alt="doodle de una persona con corazón"
      >
      <h1 class="announcement_title">
        {{ title }}
      </h1>
      <p>{{ description }}</p>
      <router-link
        class="announcement_cta"
        to="/despedida"
      >
        {{ buttonDescription }}
      </router-link>
    </div>
    <div class="announcement_bg section-wave-bg" />
  </section>
</template>

<script>
export default {
  name: "Announcement",
  data() {
    return {
      title: "Tenemos algo que contarte",
      description:
        "El proyecto 'Codex' ha llegado a su fin, te invitamos a leer nuestro comunicado",
      buttonDescription: "Carta de despedida",
    };
  },
};
</script>

<style lang="scss">
@import "../styles/vars";
@import "../styles/functions";

.announcement {
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
