<template>
  <div class="event-card" v-bind:style="{ backgroundImage: 'url(' + imageUrl + ')'}">
    <div class="event-card__content">
      <h1 class="event-card__content__title">{{event.title}}</h1>
      <span class="event-card__content__detail"><span>Fecha:</span> {{event.date}}</span>
      <span class="event-card__content__detail"><span>Hora:</span> {{event.time}}</span>
      <span class="event-card__content__detail"><span>Lugar:</span> {{event.venue}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'event-card',
  props: {
    event: {
      type: Object,
      required: true
    },
    imageUrl: {
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
  background-size: cover;
  border-radius: 10px;
  color: color(white);
  height: 469px;
  max-width: 290px;
  padding: 0;

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

      span {
        font-weight: font-weight(medium);
      }
    }
  }
}
</style>
