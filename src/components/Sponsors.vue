<template>
  <div
    id="sponsors"
    class="sponsors"
  >
    <div class="sponsors__title title">
      <h1>Patrocinadores</h1>
    </div>
    <div class="row center-xs middle-xs">
      <div
        v-for="item in sponsors"
        :key="item.name"
        class="col-xs-12 col-sm-6 col-md-3"
      >
        <card
          :logo="item.logo"
          :sponsor-name="item.name"
          :sponsor-url="item.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import sponsorCard from "@/components/SponsorsCard";

export default {
  name: "Sponsors",
  components: {
    card: sponsorCard,
  },
  data: function () {
    return {
      sponsors: [
        {
          name: "Huge inc",
          logo: "logo_huge.jpg",
          url: "http://www.hugeinc.com",
        },
        {
          name: "GitHub Campus Experts",
          logo: "logo_gce.png",
          url: "http://www.github.com",
        },
        {
          name: "Laboratorio Integrado de Sistemas",
          logo: "logo_lis.jpeg",
          url: "http://lis.udea.edu.co",
        },
        {
          name: "Departamento de Ingenieria de Sistemas",
          logo: "logo_ids.jpg",
          url: "http://sistemas.udea.edu.co",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../styles/vars";
@import "../styles/mixins";
@import "../styles/functions";

.sponsors {
  margin: 0 auto;
  max-width: 1280px;
  padding: 30px;

  &__title {
    color: color(astronaut);
  }
}
</style>
