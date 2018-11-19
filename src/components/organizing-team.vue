<template>
  <section class="organizing-team">
    <h1 class="organizing-team__title">Equipo organizador</h1>
    <div class="container">
      <div class="row around-xs">
        <team-card
          v-for="member in team"
          :key="member.name"
          :team-member="member"
          theme="green"
        />
      </div>
    </div>
  </section>
</template>

<script>
import team from '../assets/data/team'
import TeamCard from '../components/team-card'

export default {
  name: 'organizing-team',
  components: {
    TeamCard
  },
  data () {
    return {
      team
    }
  }
}
</script>

<style lang="scss">
@import '../styles/vars';
@import '../styles/functions';

.organizing-team {
  background-color: color(white);
  padding: 88px 0;

  &__title {
    color: color(astronaut);
    font-size: font(42);
    font-weight: (bold);
    margin: 0;
    margin-bottom: 115px;
    text-align: center;
  }
}
</style>
