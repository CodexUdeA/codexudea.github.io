<template>
  <div class="home-page">
    <hero />
    <about />
    <events />
    <share-with-us />
    <team />
    <sponsors />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Team from "@/components/Team";
import ShareWithUs from "@/components/ShareWithUs";
import Sponsors from "@/components/Sponsors";

export default {
  name: "HomePage",
  components: {
    About,
    Hero,
    Events,
    Team,
    ShareWithUs,
    Sponsors
  }
};
</script>
