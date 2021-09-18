<template>
  <div class="home-page">
    <navbar-desktop />
    <hero
      v-bind:cta="heroCta"
      image="/src/assets/images/hero/bg-hero.jpg"
      headline="Codex UdeA"
      sub-headline="Somos estudiantes a los que nos apasiona el desarrollo de software y nos reunimos para aprender juntos."
    />
    <text-section
      title="¿Quiénes somos?"
      v-bind:useButton="false"
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
      v-bind:useButton="true"
      button-label="Dar una charla"
      button-url="https://docs.google.com/forms/d/e/1FAIpQLSfyeovAO7oIL4Zj3TdHXKJMKBzTo0d9EVxnpU4PgaEtEb4SxA/viewform"
    />
    <sponsors />
    <bottom />
  </div>
</template>

<script>
import Bottom from '@/components/footer'
import HallOfFame from '@/components/hall-of-fame'
import Hero from '@/components/hero'
import HeroesSection from '@/components/heroes-section'
import NavbarDesktop from '@/components/navbar-desktop'
import NextEvents from '@/components/next-events'
import OrganizingTeam from '@/components/organizing-team'
import Sponsors from '@/components/sponsors'
import TextSection from '@/components/text-section'

export default {
  name: 'home-page',
  components: {
    Bottom,
    HallOfFame,
    Hero,
    HeroesSection,
    NavbarDesktop,
    NextEvents,
    OrganizingTeam,
    Sponsors,
    TextSection
  },
  data () {
    return {
      heroCta: {
        label: 'Dar una charla',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSfyeovAO7oIL4Zj3TdHXKJMKBzTo0d9EVxnpU4PgaEtEb4SxA/viewform',
        target: '_blank',
        type: 'anchor'
      },
      heroBgImage: '../assets/images/hero/bg-hero.jpg'
    }
  }
}
</script>
