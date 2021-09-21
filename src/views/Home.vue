<template>
  <div class="home-page">
    <navbar-desktop />
    <hero />
    <text-section
      title="¿Quiénes somos?"
      :use-button="false"
      description="Somos una comunidad de desarrollo de software formada por estudiantes de la Universidad de Antioquia, nuestro objetivo es compartir conocimiento sobre desarrollo web y mejorar nuestras habilidades de comunicación."
    />
    <next-events />
    <heroes-section />
    <hall-of-fame />
    <organizing-team />
    <text-section
      id="speaker"
      title="Quiero dar una charla"
      description="Nos encantaría tenerte como invitado especial, si quieres compartir tu conocimiento con nosotros, solo debes completar el formulario y nos pondremos en contacto contigo."
      :use-button="true"
      button-label="Dar una charla"
      button-url="https://docs.google.com/forms/d/e/1FAIpQLSfyeovAO7oIL4Zj3TdHXKJMKBzTo0d9EVxnpU4PgaEtEb4SxA/viewform"
    />
    <sponsors />
    <bottom />
  </div>
</template>

<script>
import Bottom from "@/components/Footer";
import HallOfFame from "@/components/HallOfFame";
import Hero from "@/components/Hero";
import HeroesSection from "@/components/HeroesSection";
import NavbarDesktop from "@/components/NavbarDesktop";
import NextEvents from "@/components/NextEvents";
import OrganizingTeam from "@/components/OrganizingTeam";
import Sponsors from "@/components/Sponsors";
import TextSection from "@/components/TextSection";

export default {
  name: "HomePage",
  components: {
    Bottom,
    HallOfFame,
    Hero,
    HeroesSection,
    NavbarDesktop,
    NextEvents,
    OrganizingTeam,
    Sponsors,
    TextSection,
  },
};
</script>
