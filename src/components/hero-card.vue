<template>
  <div class="hero-card">
    <div class="hero-card__image">
      <img :src="hero.picture" alt="foto del heroe">
    </div>
    <div class="hero-card__info">
      <p class="hero-card__name">{{hero.name}}</p>
      <p class="hero-card__bio">{{hero.bio}}</p>
      <div class="hero-card__social">
        <a :href="hero.twitter">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a :href="hero.github">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero-card',
  props: {
    hero: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang='scss'>
@import '../styles/vars';
@import '../styles/functions';

.hero-card {
  background-color: color(victoria);
  border-radius: 6px;
  display: flex;
  height: 100px;
  margin: 10px;
  width: 230px;

  p {
    margin: 0;
  }

  &__image {
    width: 80px;

    img {
      border-radius: 6px 0 0 6px;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    padding: 5px;
    position: relative;
    width: 150px;
  }

  &__name {
    color: color(sunflower);
    font-size: font(font-16);
    font-weight: font-weight(medium);
  }

  &__bio {
    color: color(white);
    font-size: font(font-12);
  }

  &__social {
    position: absolute;
    bottom: 5px;

    a {
      color: color(white);
    }

    .fa {
      font-size: font(font-20);
    }
  }
}
</style>
