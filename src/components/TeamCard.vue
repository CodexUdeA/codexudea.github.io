<template>
  <div class="team-card">
    <div
      class="team-card_picture"
      :style="{ 'background-image': 'url(' + person.picture + ')' }"
    />
    <div class="team-card_content">
      <h3 class="team-card_name">
        {{ person.name }}
      </h3>
      <div class="team-card_social">
        <a
          v-for="(item, index) in person.social"
          :key="index"
          :href="item.url"
          rel="noopener"
          target="_blank"
        >
          <font-awesome-icon
            class="team-card_social-icon"
            :icon="['fab', item.name]"
          />
        </a>
      </div>
      <p class="team-card_description">
        {{ person.description }}
      </p>
    </div>

    <!-- This SVG cannot be separated to a different file due to compatibility issues among browsers. -->
    <svg
      width="0"
      height="0"
    >
      <clipPath
        id="svgClip"
        clipPathUnits="objectBoundingBox"
      >
        <path
          d="M0.07,0.205 C0.018,0.283,0.001,0.359,0.001,0.432 C0.001,0.506,0.025,0.592,0.059,0.687 C0.084,0.757,0.125,0.853,0.163,0.886 C0.295,0.999,0.409,1,0.617,1 C0.76,1,0.857,0.945,0.898,0.886 C0.931,0.838,0.964,0.746,0.984,0.651 C1,0.547,1,0.471,1,0.432 C1,0.386,1,0.331,0.926,0.205 C0.885,0.134,0.819,0.106,0.697,0.064 C0.574,0.022,0.483,-0.026,0.333,0.016 C0.184,0.059,0.18,0.039,0.07,0.205"
        />
      </clipPath>
    </svg>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "../styles/vars";
@import "../styles/functions";

.team-card {
  align-items: center;
  display: flex;
  height: 350px;
  flex-direction: column;
  margin: 0 10px;
  max-width: 230px;

  &_content {
    padding: 5px;
    text-align: center;
  }

  &_description {
    font-size: 14px;
    margin: 0;
  }

  &_name {
    margin: 5px 0;
  }

  &_picture {
    background-size: cover;
    clip-path: url("#svgClip");
    margin: 0 auto;
    height: 150px;
    width: 150px;
  }

  &_social {
    margin: 8px 0;

    &-icon {
      color: color(alizarin-crimson);
      font-size: 18px;
      margin-left: 5px;
    }
  }
}
</style>
