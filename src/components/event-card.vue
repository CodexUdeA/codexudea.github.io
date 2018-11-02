<template>
  <div class="event-card">
    <div class="event-card__information">
      <h2>Non tempor officia consequat ut consectetur.</h2>
      <span>The date</span>
      <span>The hour</span>
      <span>The place</span>
    </div>
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
    max-width: 300px;
    height: 400px;
    border-radius: 5px;
    color: color(white);
    background: linear-gradient(rgba(44, 53, 129, 0.7), rgba(44, 53, 129, 0.7)), url('http://placekitten.com/200/200');
    &__information {
      height: inherit;
      padding: 50% 15px 15px 15px;
      h2 {
        font-weight: bold;
      }
      span {
        display: block;
        padding-top: 10px;
      }
    }
  }
</style>
