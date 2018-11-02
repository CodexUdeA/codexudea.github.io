<template>
  <div class="event-card">
    <h1 class="event-card__title">{{title}}</h1>
    <span class="event-card__detail">{{date}}</span>
    <span class="event-card__detail">{{hour}}</span>
    <span class="event-card__detail">{{place}}</span>
  </div>
</template>

<script>
export default {
  name: 'event-card',
  props: {
    title: String,
    date: String,
    hour: String,
    place: String
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
    background: linear-gradient(rgba(map-get($colors, astronaut), 0.7), rgba(map-get($colors, astronaut), 0.7)), url('http://placekitten.com/200/200');
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
</style>
