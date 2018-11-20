<template>
  <section class="heroes-section">
    <div class="title">
      <h1 class="heroes-section__title">Heroes</h1>
    </div>
    <div class="container">
      <div class="row center-xs start-md">
        <hero-card
          v-for="hero in heroes"
          :key="hero.name"
          :hero="hero"
        />
      </div>
    </div>
  </section>
</template>

<script>
import heroes from '../assets/data/heroes'
import HeroCard from '../components/hero-card'

export default {
  name: 'heroes-section',
  components: {
    HeroCard
  },
  data () {
    return {
      heroes
    }
  }
}
</script>

<style lang="scss">
@import '../styles/vars';
@import '../styles/functions';

.heroes-section {
  background-color: color(astronaut);
  padding: 88px 0;

  &__title {
    color: color(white);
    font-size: font(42);
    font-weight: (bold);
    margin: 0;
    margin-bottom: 115px;
    text-align: center;
  }
}
</style>
