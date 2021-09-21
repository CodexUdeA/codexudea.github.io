<template>
  <div class="sponsor-card">
    <a :href="sponsor_url">
      <img
        :src="require(`../assets/images/sponsors/${logo}`)"
        :alt="sponsor_name"
        class="sponsor-card__image"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "sponsor-card",
  props: {
    logo: {
      type: String,
      required: true,
    },
    sponsor_name: {
      type: String,
      required: true,
    },
    sponsor_url: {
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
