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
    <text-section
      title="¿Quienes Somos?"
      description="Aliquip sint labore adipisicing irure. Labore reprehenderit sunt labore velit. Ullamco fugiat ad culpa anim officia eiusmod excepteur sint exercitation cillum. Consequat veniam laborum irure magna magna anim tempor aliquip reprehenderit quis voluptate laborum proident. Incididunt aliqua voluptate quis duis nostrud sunt quis aute nisi voluptate minim ut elit. Amet adipisicing minim in deserunt exercitation consectetur officia. Deserunt eu anim occaecat quis anim cillum est veniam ea sint id culpa ipsum."
      v-bind:useButton="false"
    />
    <next-events />
    <heroes-section />
    <hall-of-fame />
    <organizing-team />
    <text-section
      id="speaker"
      title="Quiero dar una charla"
      description="Aliquip sint labore adipisicing irure. Labore reprehenderit sunt labore velit. Ullamco fugiat ad culpa anim officia eiusmod excepteur sint exercitation cillum. Consequat veniam laborum irure magna magna anim tempor aliquip reprehenderit quis voluptate laborum proident. Incididunt aliqua voluptate quis duis nostrud sunt quis aute nisi voluptate minim ut elit. Amet adipisicing minim in deserunt exercitation consectetur officia. Deserunt eu anim occaecat quis anim cillum est veniam ea sint id culpa ipsum."
      v-bind:useButton="true"
      button-label="Dar una charla"
      button-url="https://docs.google.com/forms/d/e/1FAIpQLSfyeovAO7oIL4Zj3TdHXKJMKBzTo0d9EVxnpU4PgaEtEb4SxA/viewform"
    />
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
import TextSection from '../components/text-section'

export default {
  name: 'home-page',
  components: {
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
        target: '_self',
        type: 'button'
      },
      heroBgImage: '../assets/images/hero/bg-hero.jpg'
    }
  }
}
</script>
