<template>
  <div class="footer row">
    <div class="footer-logo col-xs-2">
      <img class="footer-image" src="../assets/images/logo.svg" alt="codex logo">
    </div>
    <div class="footer-information col-xs-6">
      <i class="fa fa-facebook-official" aria-hidden="true" />
      <label class= "footer-facebook"> /codexUdeA </label>
      <i class="fa fa-at" aria-hidden="true" />
      <label class="footer-email"> info@codex.com </label>
      <label class="footer-message"> Made with </label>
      <i class="fa fa-heart" aria-hidden="true" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="scss">
  @import '../styles/vars';
  @import '../styles/functions';
  @import '../styles/mixins';

  .footer {
    background-color: color(astronaut);
    color: white;
    width: 100vw;
    padding: 10px 15vw;
    font-weight: font-weight(light);
    font-size: fonts(font-16);
    flex-direction: row;
  }

  .footer-logo {
    margin: 0px 20vw 0px 0vw;
    justify-content: center;
    text-align: center;
  }

  .footer-logo .footer-image{
    height: 60%;
  }

  .footer-information {
    margin: 1%;
    padding: 0px;
    justify-content: center;
  }

  .footer-facebook {
    margin: 0px 7% 0px 1%;
  }

  .footer-email {
    margin: 0px 7% 0px 1%;
  }

  .footer-message {
    margin: 0px 1% 0px 2%;
  }

  .fa {
    padding: 0px;
    margin: 0px;
    font-size: 24px;
  }

  .fa-heart {
    color: #DB5757;
  }

  @media (max-width: 1200px){
    .footer {
      font-size: 5%;
      height: 30px;
      padding: 8px 10vw;
    }

    .footer-logo {
      margin: 0px 12vw 0px 0vw;
      justify-content: center;
      text-align: center;
    }

    .fa {
      font-size: 5%;
    }

    .footer-facebook {
      margin: 0px 3% 0px 1%;
    }

    .footer-email {
      margin: 0px 3% 0px 1%;
    }
  }
</style>
