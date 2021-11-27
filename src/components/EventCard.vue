<template>
  <div class="event-card">
    <div
      class="event-card_image"
      :style="{
        'background-image': 'url(' + eventImage + ')',
      }"
    />
    <div class="event-card_content">
      <div class="event-card_content-header">
        <span>{{ date }}</span>
        <span>{{ eventType }}</span>
      </div>
      <div class="event-card_content-details">
        <h3 class="event-card_title">
          {{ title }}
        </h3>
        <p>{{ description }}</p>
      </div>
      <div class="event-card_content-footer">
        <p class="event-card_toping">
          <font-awesome-icon
            class="event-card_icon"
            icon="map-marker-alt"
          />
          <a
            :href="location"
            target="blank"
          >{{ location }}</a>
        </p>
        <p class="event-card_toping">
          <font-awesome-icon
            class="event-card_icon"
            icon="clock"
          />{{ time }}
          (UTC-5)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    eventType: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      eventImage: require(`../assets/images/events/${this.eventType}.png`),
    };
  },
};
</script>

<style lang="scss">
@import "../styles/vars";
@import "../styles/functions";

.event-card {
  background: color(alabaster);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  display: flex;
  flex: none;
  height: 420px;
  flex-direction: column;
  margin-right: 25px;
  max-width: 270px;

  &_icon {
    color: color(alizarin-crimson);
    margin-right: 5px;
  }

  &_image {
    background-size: cover;
    border-radius: 10px 10px 0 0;
    height: 170px;
  }

  &_content {
    flex: 1;
    padding: 18px;
    position: relative;

    &-header {
      color: color(alizarin-crimson);
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      font-family: "Roboto Mono", monospace;
    }

    &-details {
      font-size: 14px;
    }

    &-footer {
      bottom: 0;
      left: 0;
      right: 0;
      padding: 18px;
      position: absolute;
    }
  }

  &_toping {
    font-size: 14px;
    margin: 6px 0;
    word-break: break-all;
  }

  &_title {
    font-size: 16px;
  }
}
</style>
