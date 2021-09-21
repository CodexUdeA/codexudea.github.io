<template>
  <a class="button" :target="target" :href="url">
    <span class="button-label">{{ label }}</span>
  </a>
</template>

<script>
export default {
  name: "button-link",
  props: {
    label: {
      type: String,
      default: "Label",
    },
    url: {
      type: String,
      default: "#",
    },
    target: {
      type: String,
      default: "_self",
    },
  },
};
</script>
