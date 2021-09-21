<template>
  <section
    id="hall-of-fame"
    class="hall-of-fame"
  >
    <div class="title">
      <h1 class="hall-of-fame__title">
        Salón de la fama
      </h1>
      <h2 class="hall-of-fame__subtitle subtitle">
        Gracias por aportar en la construcción de esta comunidad.
      </h2>
    </div>
    <div class="container">
      <div class="row around-xs">
        <hero-card
          v-for="celebrity in celebrities"
          :key="celebrity.name"
          :hero="celebrity"
          theme="white"
        />
      </div>
    </div>
  </section>
</template>

<script>
import celebrities from '@/assets/data/celebrities'
import HeroCard from '@/components/HeroCard'

export default {
  name: 'HallOfFame',
  components: {
    HeroCard
  },
  data () {
    return {
      celebrities
    }
  }
}
</script>

<style lang="scss">
@import '../styles/vars';
@import '../styles/functions';

.hall-of-fame {
  background-color: color(golden-grass);
  padding: 88px 0;

  &__title {
    color: color(astronaut);
  }
}
</style>
