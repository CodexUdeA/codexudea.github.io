<template>
  <div class="impact">
    <!-- navigation -->
    <div class="impact-navbar">
      <navbar />
      <div class="impact-navbar_bg section-wave-bg" />
    </div>

    <!-- title -->
    <h1 class="section-title">
      Impacto de Codex
    </h1>

    <!-- stats -->
    <section class="container impact-stats-container">
      <div
        v-for="(item, index) in stats"
        :key="index"
        class="impact-stats-item"
      >
        <span class="impact-stats-value">
          {{ item.value }}
        </span>
        <span class="impact-stats-name">
          {{ item.title }}
        </span>
      </div>
    </section>

    <!-- stats list -->
    <section class="container">
      <div
        v-for="(item, index) in statsList"
        :key="index"
        class="impact-stats-list-container"
      >
        <p class="impact-stats-list-name">
          {{ item.title }}
        </p>
        <ul class="impact-stats-list">
          <li
            v-for="(subitem, subindex) in item.value"
            :key="subindex"
          >
            {{ subitem }}
          </li>
        </ul>
      </div>
    </section>

    <!-- sponsors -->
    <section class="container">
      <h2 class="impact-subtitle">
        Empresas patrocinadoras
      </h2>
      <div class="impact-sponsors">
        <div
          v-for="(item, index) in sponsors"
          :key="index"
        >
          <img
            class="impact-sponsors-logo"
            :src="statsImage(item.logo)"
          >
        </div>
      </div>
    </section>

    <!-- team -->
    <section class="container">
      <h2 class="impact-subtitle">
        Hicieron parte de nuestro equipo
      </h2>
      <div class="impact-team-container">
        <div
          v-for="(value, index) in previousTeam"
          :key="index"
          class="impact-team-item"
        >
          <div
            class="impact-team-image"
            :style="{ 'background-image': 'url(' + value.image + ')' }"
          />
          <p>{{ value.name }}</p>
        </div>
      </div>
    </section>

    <!-- footer -->
    <div class="impact-bottom">
      <div class="impact-bottom_bg section-wave-bg" />
    </div>
    <bottom />

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
import Bottom from "@/components/Footer";
import Navbar from "@/components/Navbar";

import previousTeam from "@/assets/data/previousTeam";
import sponsors from "@/assets/data/sponsors";
import stats from "@/assets/data/stats";
import statsList from "@/assets/data/statsList";

export default {
  name: "Impact",
  components: {
    Navbar,
    Bottom,
  },
  data() {
    return {
      previousTeam,
      sponsors,
      stats,
      statsList,
    };
  },
  methods: {
    statsImage(imageName) {
      return require(`../assets/images/${imageName}`);
    },
  },
};
</script>

<style lang="scss">
@import "../styles/vars";
@import "../styles/functions";
@import "../styles/mixins";

.impact {
  &-bottom {
    position: relative;
    height: 100px;

    @include from(md) {
      height: 150px;
    }

    &_bg {
      background-image: url("../assets/backgrounds/footer-path.svg");
    }
  }

  &-navbar {
    height: 150px;
    background: color(half-baked);
    position: relative;

    &_bg {
      background-image: url("../assets/backgrounds/share-path-2.svg");
    }
  }

  &-sponsors {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    &-logo {
      margin: 30px;
      max-width: 200px;
    }
  }

  &-subtitle {
    color: color(half-baked);
    font-size: 30px;
    margin: 60px;
    text-align: center;
  }

  &-stats {
    &-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      text-align: center;
    }

    &-item {
      display: flex;
      flex-direction: column;
      margin: 20px;
    }

    &-list {
      font-size: 14px;

      &-container {
        margin: 50px 0;
        text-align: center;
      }

      &-name {
        color: #7fbbca;
        font-size: 18px;
        font-weight: bold;
      }
    }

    &-name {
      font-size: 14px;
    }

    &-value {
      font-size: 90px;
      font-weight: bold;
      color: color(half-baked);
    }
  }

  &-team {
    &-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }

    &-image {
      background-size: cover;
      background-position: center;
      clip-path: url("#svgClip");
      margin: 0 auto;
      height: 150px;
      width: 150px;
    }

    &-item {
      margin: 30px;
      text-align: center;
    }
  }
}
</style>
