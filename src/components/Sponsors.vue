<template>
  <section class="sponsors">
    <h1 class="section-title">
      {{ title }}
    </h1>
    <div class="container sponsors_container">
      <a
        v-for="(item, index) in sponsors"
        :key="index"
        :href="item.url"
        class="sponsors_cta"
        target="_blank"
      >
        <img
          :src="require(`../assets/images/sponsors/${item.logo}`)"
          :alt="`${item.name} logo`"
          class="sponsors_image"
        >
      </a>
    </div>
  </section>
</template>

<script>
import sponsors from "@/assets/data/sponsors";

export default {
  name: "Sponsors",

  data: function() {
    return {
      title: "Patrocinadores",
      sponsors
    };
  }
};
</script>

<style lang="scss">
@import "../styles/vars";
@import "../styles/mixins";

.sponsors {
  &_container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @include from(sm) {
      justify-content: space-between;
    }
  }

  &_cta {
    margin: 15px;
  }

  &_image {
    max-width: 210px;
  }
}
</style>
