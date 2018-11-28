<template>
  <div id="sponsors" class="sponsors">
    <div class="sponsors__title title">
      <h1>Patrocinadores</h1>
    </div>
    <div class="sponsors__message">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore nisi inventore distinctio debitis quia voluptatum architecto consequatur sed ullam voluptatibus error iusto, quibusdam facere! Earum at animi quasi beatae rerum illum sunt repellendus atque voluptas. Similique quos nulla mollitia dolorum reprehenderit ab eos quidem dignissimos, illo, aut eligendi nobis asperiores!</p>
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

  &__message {
    display: flex;
    justify-content: center;
    text-align: center;

    p {
      max-width: 728px;
      font-size: 14px;
      line-height: 19px;
    }
  }

  &__list {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
