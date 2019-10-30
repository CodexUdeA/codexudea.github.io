<template>
  <div class="footer">
    <div class="container-fluid">
      <div class="row middle-xs">
        <div class="footer-logo col-xs-3 col-sm-4 col-md-5 col-lg-6 center-xs">
          <img class="footer-image" src="../assets/images/logo.svg" alt="codex logo">
        </div>
        <div class="footer-information col-xs-9 col-sm-8 col-md-7 col-lg-6">
          <div class="row middle-xs">
            <div class="footer-social">
              <a target="blank" aria-label="CodexUdeA Facebook"
                href="https://www.facebook.com/groups/CodexUdeA/">
                <i class="fa fa-facebook-official" aria-hidden="true" />
                <span class= "footer-social__text">/groups/CodexUdeA</span>
              </a>
            </div>
            <div class="footer-social">
              <a href="mailto:codex@udea.edu.co">
                <i class="fa fa-at" aria-hidden="true" />
                <span class="footer-social__text">codex@udea.edu.co</span>
              </a>
            </div>
            <div class="footer-social">
              <a target="blank" aria-label="CodexUdeA GitHub repository"
                href="https://github.com/CodexUdeA/codexudea.github.io">
                <span> Made with </span>
                <i class="fa fa-heart" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottom'
}
</script>

<style lang="scss">
  @import '../styles/vars';
  @import '../styles/functions';
  @import '../styles/mixins';

  .footer {
    background-color: color(astronaut);
    color: color(white);
    padding: 20px 0;
    font-weight: font-weight(light);
    font-size: font(font-16);
  }

  .footer-social {
    margin-right: 20px;

    a {
      color: unset;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .footer-logo .footer-image {
    width: 62px;
  }

  .fa {
    padding-right: 5px;
    font-size: font(font-24);
  }

  .fa-heart {
    color: color(radical-red);
  }

  @media (max-width: 560px){
    .footer {
      font-size: 10px;
    }

    .fa {
      font-size: 10px;
    }
  }
</style>
