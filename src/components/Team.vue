<template>
  <section
    id="team"
    class="team"
  >
    <h1 class="section-title">
      {{ title }}
    </h1>
    <div class="container team_container">
      <team-card
        v-for="(item, index) in team"
        :key="index"
        :person="item"
      />
    </div>
  </section>
</template>

<script>
import team from "@/assets/data/team";
import TeamCard from "@/components/TeamCard";

export default {
  name: "Team",
  components: {
    TeamCard
  },
  data() {
    return {
      title: "Equipo",
      team
    };
  }
};
</script>

<style lang="scss">
.team {
  &_container {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
