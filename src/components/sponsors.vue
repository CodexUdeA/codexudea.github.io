<template>
  <div id="sponsors" class="sponsors">
    <div class="sponsors__title title">
      <h1>Patrocinadores</h1>
    </div>
    <div class="row center-xs middle-xs">
      <div class="col-xs-12 col-sm-6 col-md-3" v-for="item in sponsors" :key="item.name">
        <card v-bind:logo="item.logo" v-bind:sponsor_name="item.name" v-bind:sponsor_url="item.url"/>
      </div>
    </div>
  </div>
</template>

<script>
import sponsorCard from '../components/sponsors-card.vue'

export default {
  name: 'sponsors',
  data: function () {
    return { sponsors: [{
      name: 'Huge inc',
      logo: '/src/assets/images/sponsors/logo_huge.jpg',
      url: 'http://www.hugeinc.com'
    },
    {
      name: 'GitHub Campus Experts',
      logo: '/src/assets/images/sponsors/logo_gce.png',
      url: 'http://www.github.com'
    },
    {
      name: 'Laboratorio Integrado de Sistemas',
      logo: '/src/assets/images/sponsors/logo_lis.jpeg',
      url: 'http://lis.udea.edu.co'
    },
    {
      name: 'Departamento de Ingenieria de Sistemas',
      logo: '/src/assets/images/sponsors/logo_ids.jpg',
      url: 'http://sistemas.udea.edu.co'
    }]
    }
  },
  components: {
    card: sponsorCard
  }
}
</script>

<style lang="scss">
@import '../styles/vars';
@import '../styles/mixins';
@import '../styles/functions';

.sponsors {
  margin: 0 auto;
  max-width: 1280px;
  padding: 30px;

  &__title {
    color: color(astronaut);
  }
}
</style>
