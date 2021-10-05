<template>
  <div class="hero-card">
    <div class="hero-card__image">
      <img
        :src="hero.picture"
        alt="foto del heroe"
      >
    </div>
    <div class="hero-card__info">
      <p class="hero-card__name">
        {{ hero.name }}
      </p>
      <p class="hero-card__bio">
        {{ hero.bio }}
      </p>
      <div class="hero-card__social">
        <a
          v-if="hero.twitter"
          :href="hero.twitter"
        >
          <i
            class="fa fa-twitter"
            aria-hidden="true"
          />
        </a>
        <a
          v-if="hero.github"
          :href="hero.github"
        >
          <i
            class="fa fa-github"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroCard',
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
  margin: 10px;
  min-height: 80px;
  width: 230px;

  &__image {
    position: relative;
    width: 80px;

    img {
      border-radius: 6px 0 0 6px;
      height: 100%;
      object-fit: cover;
      position: absolute;
    }
  }

  &__info {
    padding: 10px 10px 30px;
    position: relative;
    width: 150px;
  }

  &__name {
    color: color(sunflower);
    font-size: font(font-16);
    font-weight: font-weight(medium);
    margin: 0 0 5px;
  }

  &__bio {
    color: color(white);
    font-size: font(font-12);
    margin: 0;
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
