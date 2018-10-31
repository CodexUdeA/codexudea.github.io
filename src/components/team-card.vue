<template>
  <div class="team-card">
    <div class="row center-xs">
      <div class="team-card-image-container">
        <img class="team-card-image" src="http://placekitten.com/200/200" alt="team member picture">
      </div>
    </div>
    <div class="row center-xs">
      <h4 class="team-card-name">Lorem Ipsum</h4>
      <p class="team-card-bio">
        Ullamco duis qui aute eiusmod aute elit officia exercitation commodo sint.
      </p>
      <div class="team-card-social">
        <a href="#"><i class="fa fa-2x fa-github" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-2x fa-twitter" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'team-card'
}
</script>

<style lang="scss">
@import '../styles/vars';
@import '../styles/functions';

.team-card {
  background-color: color(chenin);
  border-radius: 10px;
  max-width: 235px;
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
    font-weight: 500;
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
