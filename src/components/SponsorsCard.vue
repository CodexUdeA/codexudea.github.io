<template>
  <div class="sponsor-card">
    <a :href="sponsor_url">
      <img
        :src="require(`../assets/images/sponsors/${logo}`)"
        :alt="sponsor_name"
        class="sponsor-card__image"
      >
    </a>
  </div>
</template>

<script>
export default {
  name: "SponsorCard",
  props: {
    logo: {
      type: String,
      required: true,
    },
    sponsorName: {
      type: String,
      required: true,
    },
    sponsorUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "../styles/vars";
@import "../styles/mixins";
@import "../styles/functions";

.sponsor-card {
  margin-bottom: 30px;

  &__image {
    max-width: 156px;
  }
}
</style>
