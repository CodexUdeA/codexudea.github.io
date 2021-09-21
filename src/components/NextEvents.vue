<template>
  <section
    id="events"
    class="next-events"
  >
    <div class="title">
      <h1 class="next-events__title">
        Próximos eventos
      </h1>
    </div>
    <div class="container">
      <div class="row around-xs">
        <event-card
          v-for="event in nextEvents"
          :key="event.name"
          class="col-sm-4"
          :event="event"
        />
      </div>
    </div>
  </section>
</template>

<script>
import events from "@/assets/data/events";
import EventCard from "@/components/EventCard";

export default {
  name: "NextEvents",
  components: {
    EventCard,
  },
  data() {
    return {
      events,
    };
  },
  computed: {
    nextEvents() {
      const events = Object.values(this.events);
      return events.slice(-3, events.length);
    },
  },
};
</script>

<style lang="scss">
@import "../styles/vars";
@import "../styles/functions";

.next-events {
  background-color: color(white);
  padding: 88px 0;

  &__title {
    color: color(astronaut);
  }
}
</style>
