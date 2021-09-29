<template>
  <div class="home-page">
    <hero />
    <about />
    <events />
    <team />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Team from "@/components/Team";

export default {
  name: "HomePage",
  components: {
    About,
    Hero,
    Events,
    Team,
  },
};
</script>
