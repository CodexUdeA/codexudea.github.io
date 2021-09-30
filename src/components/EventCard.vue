<template>
  <div class="event-card">
    <div>
      <img
        class="event-card_image"
        :src="require(`../assets/images/events/${eventType}.png`)"
        alt=""
      >
    </div>
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
        <span><font-awesome-icon
                class="event-card_icon"
                icon="map-marker-alt"
              />
          <a :href="location">{{ location }}</a></span><br>
        <span><font-awesome-icon
          class="event-card_icon"
          icon="clock"
        />{{
          time
        }}
          (UTC-5)</span>
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
      required: true
    },
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.event-card {
  background: #eeeeee;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  flex: none;
  height: 400px;
  margin-right: 20px;
  max-width: 270px;

  &_icon {
    color: #e51f34;
    margin-right: 5px;
  }

  &_image {
    border-radius: 10px 10px 0 0;
  }

  &_content {
    padding: 18px;

    &-header {
      color: #e51f34;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      font-family: "Roboto Mono", monospace;
    }

    &-details {
      font-size: 14px;
    }
  }

  &_title {
    font-size: 16px;
  }
}
</style>
