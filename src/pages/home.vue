<template>
  <div class="home-page">
    <navbar-desktop />
    <hero
      v-bind:cta="heroCta"
      image="/src/assets/images/hero/bg-hero.jpg"
      headline="Codex UdeA"
      sub-headline="Lorem sint ullamco nisi irure ut ut magna et ex nulla."
      description="Aliqua commodo quis elit laborum. Proident eu laboris culpa est nostrud mollit. Cupidatat excepteur exercitation pariatur pariatur magna commodo dolore nostrud in. Exercitation consequat eiusmod cupidatat irure mollit ut sint cupidatat sit cupidatat."
    />
    <next-events />
    <heroes-section />
    <hall-of-fame />
    <organizing-team />
    <sponsors />
  </div>
</template>

<script>
import HallOfFame from '../components/hall-of-fame'
import Hero from '../components/hero'
import HeroesSection from '../components/heroes-section'
import NavbarDesktop from '../components/navbar-desktop'
import NextEvents from '../components/next-events'
import OrganizingTeam from '../components/organizing-team'
import Sponsors from '../components/sponsors'

export default {
  name: 'home-page',
  components: {
    HallOfFame,
    Hero,
    HeroesSection,
    NavbarDesktop,
    NextEvents,
    OrganizingTeam,
    Sponsors
  },
  data () {
    return {
      heroCta: {
        label: 'Dar una charla',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSfyeovAO7oIL4Zj3TdHXKJMKBzTo0d9EVxnpU4PgaEtEb4SxA/viewform',
        target: '_self',
        type: 'button'
      },
      heroBgImage: '../assets/images/hero/bg-hero.jpg'
    }
  }
}
</script>
