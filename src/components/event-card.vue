<template>
  <div class="event-card" v-bind:style="{ backgroundImage: 'url(' + imageUrl + ')'}">
    <div class="event-card__content">
      <h1 class="event-card__content__title">{{title}}</h1>
      <span class="event-card__content__detail">{{date}}</span>
      <span class="event-card__content__detail">{{hour}}</span>
      <span class="event-card__content__detail">{{place}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'event-card',
  props: {
    imageUrl: {
      type: String,
      required: true,
      default: ''
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    date: {
      type: String,
      required: true,
      default: ''
    },
    hour: {
      type: String,
      required: true,
      default: ''
    },
    place: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/vars';
  @import '../styles/functions';

  .event-card {
    max-width: 378px;
    height: 469px;
    border-radius: 10px;
    color: color(white);
    &__content {
      width: 100%;
      height:100%;
      border-radius: 10px;
      background-color: rgba(color(astronaut), 0.5);
      &__title {
        font-size: font(font-24);
        padding: 237px 62px 0 32px;
        font-weight: bold;
      }
      &__detail {
        padding: 0 62px 0 32px;
        display: block;
        padding-top: 10px;
      }
    }
  }
</style>
