<template>
  <section class="hall-of-fame">
    <div class="title">
      <h1 class="hall-of-fame__title">Salón de la fama</h1>
    </div>
    <div class="container">
      <div class="row around-xs">
        <team-card
          v-for="celebrity in celebrities"
          :key="celebrity.name"
          :team-member="celebrity"
        />
      </div>
    </div>
  </section>
</template>

<script>
import celebrities from '../assets/data/celebrities'
import TeamCard from '../components/team-card'

export default {
  name: 'hall-of-fame',
  components: {
    TeamCard
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
    font-size: font(font-42);
    font-weight: (bold);
    margin: 0;
    margin-bottom: 115px;
    text-align: center;
  }
}
</style>
