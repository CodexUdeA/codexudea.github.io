<template>
  <section class="next-events">
    <h1 class="next-events__title">Próximos eventos</h1>
    <div class="container">
      <div class="row around-xs">
        <event-card
          class="col-sm-4"
          v-for="event in nextEvents"
          :key="event.name"
          :event="event"
          image-url="/src/assets/images/events/event-background.jpg"
        />
      </div>
    </div>
  </section>
</template>

<script>
import events from '../assets/data/events'
import EventCard from '../components/event-card'

export default {
  name: 'next-events',
  components: {
    EventCard
  },
  data () {
    return {
      events
    }
  },
  computed: {
    nextEvents () {
      const events = Object.values(this.events)
      return events.slice(-3, events.length)
    }
  }
}
</script>

<style lang="scss">
@import '../styles/vars';
@import '../styles/functions';

.next-events {
  background-color: color(white);
  padding: 88px 0;

  &__title {
    color: color(astronaut);
    font-size: font(42);
    font-weight: (bold);
    margin: 0;
    margin-bottom: 115px;
    text-align: center;
  }
}
</style>
