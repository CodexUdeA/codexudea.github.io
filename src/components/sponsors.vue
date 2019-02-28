<template>
  <div id="sponsors" class="sponsors">
    <div class="sponsors__title title">
      <h1>Patrocinadores</h1>
    </div>
    <div class="sponsors__list">
      <card v-for="item in sponsors" :key="item.name" v-bind:logo="item.logo" v-bind:sponsor_name="item.name"/>
    </div>
  </div>
</template>

<script>
import sponsorCard from '../components/sponsors-card.vue'

export default {
  name: 'sponsors',
  data: function () {
    return { sponsors: [{
      name: 'huge',
      logo: '/src/assets/images/sponsors/logo_huge.jpg'
    },
    {
      name: 'LIS',
      logo: '/src/assets/images/sponsors/logo_lis.jpeg'
    },
    {
      name: 'DIS',
      logo: '/src/assets/images/sponsors/Logo_Ingeniería_de_Sistemas.jpg'
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
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  justify-content: space-around;
  padding: 30px;

  &__title {
    color: color(astronaut);
    display: flex;
    justify-content: center;
  }

  &__list {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
