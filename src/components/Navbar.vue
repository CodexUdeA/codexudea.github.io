<template>
  <nav
    class="navbar"
    :class="{ 'navbar--active': navigationOpen }"
  >
    <div class="navbar_brand">
      <router-link
        to="/"
        class="navbar-item"
      >
        <img
          src="../assets/images/logo.svg"
          alt="codex logo"
        >
      </router-link>
    </div>
    <div class="navbar_button-container">
      <button
        class="navbar_button"
        @click="toggleNav"
      >
        <font-awesome-icon
          class="navbar_button-fa"
          icon="bars"
          :style="[navigationOpen ? { display: 'none' } : { display: 'block' }]"
        />
        <font-awesome-icon
          class="navbar_button-fa"
          icon="times"
          :style="[
            !navigationOpen ? { display: 'none' } : { display: 'block' },
          ]"
        />
      </button>
    </div>
    <div class="navbar_list-container">
      <div class="section-wave-bg navbar_bg" />
      <ul class="navbar_list">
        <li
          v-for="(item, index) in options"
          :key="index"
          class="navbar_item"
        >
          <router-link
            class="navbar_item-link"
            :to="{ hash: item.url }"
            @click="hideNav"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navigationOpen: false,
      options: [
        {
          name: "Sobre nosotros",
          url: "#about",
        },
        {
          name: "Eventos",
          url: "#events",
        },
        {
          name: "Equipo",
          url: "#team",
        },
        {
          name: "Patrocinadores",
          url: "#sponsors",
        },
      ],
    };
  },
  methods: {
    toggleNav() {
      this.navigationOpen = !this.navigationOpen;
    },
    hideNav() {
      this.navigationOpen = false;
    },
  },
};
</script>

<style lang="scss">
@import "../styles/vars";
@import "../styles/functions";
@import "../styles/mixins";

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  position: absolute;
  width: 100%;
  z-index: 2;

  &--active {
    background-color: color(white);
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 0;
    top: 0;
    bottom: 0;
    position: fixed;

    .navbar_bg {
      background-image: url("../assets/backgrounds/nav-path.svg");
      background-position: top;
      display: block;
    }

    .navbar_brand {
      display: none;
    }

    .navbar_button-container {
      align-self: end;
      display: block;
      padding: 30px 30px 0 0;
    }

    .navbar_button-fa {
      color: color(half-baked);
    }

    .navbar_item {
      margin: 10px 0;
    }

    .navbar_list-container {
      background-color: color(half-baked);
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
    }

    .navbar_list {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .navbar_item-link {
      color: color(white);
      font-size: 30px;
      font-weight: 700;
    }
  }

  &_bg {
    @include from(md) {
      display: none;
    }
  }

  &_button {
    background: none;
    border: none;

    &-container {
      @include from(md) {
        display: none;
      }
    }

    &-fa {
      color: color(white);
      font-size: 30px;
    }
  }

  &_item {
    margin: 0 15px;
    position: relative;

    &::before {
      content: "";
      background: color(bright-sun);
      border-radius: 15%;
      bottom: -6px;
      height: 5px;
      left: 0;
      position: absolute;
      transition: width 0.3s ease-in-out;
      width: 0%;
    }

    &:hover {
      &::before {
        width: 100%;
      }
    }
  }

  &_item-link {
    color: color(white);
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    text-decoration: none;
  }

  &_list {
    display: flex;

    &-container {
      display: none;

      @include from(md) {
        display: flex;
      }
    }
  }
}
</style>
