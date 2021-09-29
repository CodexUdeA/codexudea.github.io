<template>
  <div class="home-page">
    <hero />
    <about />
    <events />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";

export default {
  name: "HomePage",
  components: {
    About,
    Hero,
    Events,
  },
};
</script>
