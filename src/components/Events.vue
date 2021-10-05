<template>
  <section
    id="events"
    class="events"
  >
    <h1 class="section-title">
      {{ title }}
    </h1>
    <div class="container">
      <div class="events_card-container">
        <event-card
          v-for="(event, index) in nextEvents"
          :key="index"
          :event-type="event.eventType"
          :date="event.date"
          :title="event.title"
          :description="event.description"
          :location="event.location"
          :time="event.time"
        />
      </div>
      <div class="events_all">
        <router-link to="/events">
          Ver todos los eventos
        </router-link>
      </div>
    </div>
    <div class="events_bg section-wave-bg " />
  </section>
</template>

<script>
import nextEvents from "@/assets/data/nextEvents";
import EventCard from "@/components/EventCard";

export default {
  name: "Events",
  components: {
    EventCard
  },
  data() {
    return {
      title: "Próximo eventos",
      nextEvents
    };
  }
};
</script>

<style lang="scss">
.events {
  padding-bottom: 100px;
  position: relative;

  &_all {
    margin-top: 20px;
    text-align: center;
  }

  &_bg {
    background-image: url("../assets/backgrounds/share-path-1.svg");
  }
  &_card-container {
    display: flex;
    flex-direction: row;
    padding: 5px;
    overflow-y: scroll;
  }
}
</style>
