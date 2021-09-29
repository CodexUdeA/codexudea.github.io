<template>
  <section
    class="about"
    :aria-label="title"
  >
    <h1 class="about_title">
      {{ title }}
    </h1>
    <div class="container about_container">
      <div class="about_text-container">
        <p class="about_description">
          {{ description }}
        </p>
      </div>
      <div class="about_image-container">
        <img
          class="about_vector"
          src="../assets/vectors/ReadingDoodle.svg"
          alt=""
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      title: "Sobre nosotros",
      description:
        "Elit dolore elit eu esse qui nostrud excepteur sint est. Ad minim mollit reprehenderit esse ea laborum. Ex et officia aliquip eiusmod dolor proident nisi pariatur esse culpa adipisicing et.",
    };
  },
};
</script>

<style lang="scss">
.about {
  &_container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &_image-container {
    width: 40%;
  }

  &_text-container {
    width: 60%;
  }
  &_title {
    border-radius: 1em 0 1em 0;
    background: linear-gradient(
      -100deg,
      rgba(253, 255, 58, 0.15),
      rgba(253, 255, 58, 0.9) 100%,
      rgba(253, 255, 58, 0.25)
    );
    display: block;
    margin: 0 auto;
    width: fit-content;
  }
}
</style>