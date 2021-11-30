<template>
  <div class="events">
    <!-- navigation -->
    <div class="events-navbar">
      <navbar />
      <div class="events-navbar_bg section-wave-bg" />
    </div>

    <!-- title -->
    <h1 class="section-title">
      Eventos
    </h1>

    <!-- content -->
    <div
      v-for="(item, index) in events"
      :key="index"
      class="container"
    >
      <h2 class="events-year">
        {{ item.year }}
      </h2>
      <div class="events-list">
        <div
          v-for="(event, subIndex) in item.events"
          :key="subIndex"
          class="events-item"
        >
          <div class="events-date">
            <span class="events-date-day">{{ event.date.split("/")[1] }}</span>
            <span class="events-date-month">{{
              event.date.split("/")[0]
            }}</span>
          </div>
          <div class="events-details">
            {{ event.title }}
            <span class="events-speaker">{{ event.speaker }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->
    <div class="events-footer">
      <bottom />
    </div>
  </div>
</template>

<script>
import Bottom from "@/components/Footer";
import Navbar from "@/components/Navbar";

import events from "@/assets/data/events";

export default {
  name: "Events",
  components: {
    Navbar,
    Bottom,
  },
  data() {
    return {
      events,
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@import "../styles/vars";
@import "../styles/functions";

.events {
  &-list {
    > :not(:last-child) {
      border-bottom: 3px solid color(victoria);
    }
  }

  &-date {
    color: color(victoria);
    padding: 0 30px;
    text-align: center;

    &-day {
      display: block;
      font-size: 50px;
      font-weight: bold;
    }

    &-month {
      font-size: 20px;
    }
  }

  &-details {
    display: flex;
    font-size: 20px;
    flex-direction: column;
    justify-content: center;
  }

  &-item {
    display: flex;
    padding: 30px;
  }

  &-navbar {
    height: 150px;
    background: color(half-baked);
    position: relative;

    &_bg {
      background-image: url("../assets/backgrounds/share-path-2.svg");
    }
  }

  &-speaker {
    font-size: 16px;
  }

  &-year {
    color: color(victoria);
    font-size: 40px;
  }
}
</style>
