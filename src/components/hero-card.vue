<template>
  <div class="hero-card">
      <div class="hero-card-image-container">
        <img class="hero-card-image" src="https://avatars0.githubusercontent.com/u/19578435?s=400&v=4" alt="hero picture">
      </div>
    <div class="row center">
      <h4 class="hero-card-name">Juanito Perez</h4>
      <p class="hero-card-bio">
        Lorem ipsum is simply
      </p>
      <div class="hero-card-social">
        <a href="#"><i class="fa fa-twitter" aria-hidden="true" style="width: 24px;height: 23px;"></i></a>#font-size
        <a href="#"><i class="fa fa-github" aria-hidden="true" style="width: 24px;height: 23px;"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero-card'
}
</script>

<style lang="scss">
@import '../styles/vars';
@import '../styles/functions';

.hero-card{
  background-color: lighten(color(astronaut), 10%);
  border-radius: 6px;
  width: 276px;
  height: 103px;
  &-bio {
    color: #FFFFFF;
    font-family: Roboto;
    font-style: light;
    font-size: 14px;
    line-height: 16px;
    margin-top: -14px;
    margin-left: 9px;
  }
  &-image-container {
    width: 103px;

    img {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      float: left;
    }
  }
  &-name {
    color: #E0E221;
    font-family: Roboto;
    font-style: medium;
    font-size: 18px;
    line-height: 21px;
    float: left;
    margin-top: 11px;
    margin-left: 9px;
  }
  &-social {
    p{
      margin-block-start: 0;
      margin-block-end: 0;
    }
    a {
      color: #ffffff;
    }
    margin-left: 11px;
    fill:solid;
  }
}

</style>
