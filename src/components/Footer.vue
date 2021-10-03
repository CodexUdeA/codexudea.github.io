<template>
  <footer class="footer">
    <div class="footer_container">
      <div>
        <img
          class="footer_logo"
          src="../assets/images/logo.svg"
          alt="codex logo"
        >
      </div>
      <div class="footer_options">
        <div
          v-for="(footerMenu, index) in footerOptions"
          :key="index"
          class="footer_menu"
        >
          <p class="footer_subtitle">
            {{ footerMenu.title }}
          </p>
          <ul class="footer_list">
            <li
              v-for="(footerOption, optionIndex) in footerMenu.elements"
              :key="optionIndex"
              class="footer_list-el"
            >
              <a
                :href="footerOption.link"
                class="footer_link"
                v-text="footerOption.name"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import footerOptions from "@/assets/data/footer.js";

export default {
  data() {
    return {
      footerOptions
    };
  }
};
</script>

<style lang="scss">
@import "../styles/vars";
@import "../styles/functions";
@import "../styles/mixins";

.footer {
  background-color: color(victoria);
  color: color(white);

  &_container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 90%;
    padding-bottom: 50px;

    @include from(sm) {
      flex-direction: row;
    }

    @include from(md) {
      max-width: 80%;
    }
  }

  &_options {
    display: flex;
  }

  &_subtitle {
    font-weight: 700;
  }

  &_list-el {
    padding-bottom: 8px;
  }

  &_link {
    color: color(white);
  }

  &_logo {
    margin-bottom: 25px;
    width: 150px;

    @include from(sm) {
      margin-bottom: 0;
    }
  }

  &_menu {
    margin: 0 20px;
  }
}
</style>
