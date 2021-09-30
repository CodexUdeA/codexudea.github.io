<template>
  <section class="team">
    <h1 class="section-title">
      Equipo
    </h1>
    <div class="container" />
    <!-- <div class="container">
      <div class="row center-xs">
        <div
          v-for="member in team"
          :key="member.name"
          class="organizing-team__item col-xs-12 col-sm-6 col-md-4 col-lg-3"
        >
          <team-card :team-member="member" />
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
// import team from '@/assets/data/team'
// import TeamCard from '@/components/TeamCard'

export default {
  name: "Team",
  // components: {
  //   TeamCard
  // },
  // data () {
  //   return {
  //     team
  //   }
  // }
};
</script>

<style lang="scss">
// @import '../styles/vars';
// @import '../styles/functions';

// .organizing-team {
//   background-color: color(white);
//   padding: 88px 0;

//   &__title {
//     color: color(astronaut);
//   }

//   &__item {
//     padding-bottom: 1rem;
//   }
// }
</style>
