<template>
  <div class="event-card">
    <h2 class="event-card__title">Non tempor officia consequat ut consectetur.</h2>
    <span class="event-card__detail">The date</span>
    <span class="event-card__detail">The hour</span>
    <span class="event-card__detail">The place</span>
  </div>
</template>

<script>
export default {
  name: 'event-card'
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
