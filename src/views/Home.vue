<template>
  <div class="home-page">
    <navbar />
    <hero />
    <about />
    <announcement />
    <events />
    <team />
    <sponsors />
    <bottom />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Announcement from "@/components/Announcement";
import Sponsors from "@/components/Sponsors";
import Bottom from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default {
  name: "HomePage",
  components: {
    About,
    Hero,
    Events,
    Team,
    Announcement,
    Sponsors,
    Bottom,
    Navbar,
  },
};
</script>
