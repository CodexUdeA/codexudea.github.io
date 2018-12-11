<template>
  <div v-bind:class="['team-card', theme]">
    <div class="row center-xs">
      <div class="team-card-image-container">
        <img class="team-card-image" v-bind:src="teamMember.picture" alt="team member picture">
      </div>
    </div>
    <div class="team-card-info">
      <h4 class="team-card-name">{{teamMember.name}}</h4>
      <p class="team-card-bio">
        {{teamMember.bio}}
      </p>
      <div class="team-card-social">
        <a v-if="teamMember.github" v-bind:href="teamMember.github">
          <i class="fa fa-2x fa-github" aria-hidden="true"></i>
        </a>
        <a v-if="teamMember.twitter" v-bind:href="teamMember.twitter">
          <i class="fa fa-2x fa-twitter" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'team-card',
  props: {
    teamMember: {
      type: Object,
      required: true
    },
    theme: String
  }
}
</script>

<style lang="scss">
@import '../styles/vars';
@import '../styles/functions';

.team-card {

  &.green {
    background-color: color(chenin);
  }

  background-color: color(white);
  border-radius: 10px;
  height: 341px;
  width: 235px;
  padding: 33px 19px;
  text-align: center;

  &-bio {
    color: color(mine-shaft);
    margin-bottom: 37px;
    margin-top: 0;
  }

  &-image-container {
    width: 100px;

    img {
      border-radius: 50%;
    }
  }

  &-name {
    color: color(astronaut);
    font-size: font(font-22);
    font-weight: font-weight(medium);
    margin: 12px 0;
  }

  &-social {
    a {
      color: color(astronaut);
      margin-right: 21px;
    }
  }
}
</style>
