<template>
  <div class="footer row">
    <div class="logo">
      <img class="footer-image" src="../assets/images/logo.svg" alt="codex logo">
    </div>
    <div class="facebook-contact">
      <i class="fa fa-facebook-official" aria-hidden="true" />
      <label class= "facebook"> /codexUdeA </label>
    </div>
    <div class="email-contact">
      <i class="fa fa-at" aria-hidden="true" />
      <label class="email"> info@codex.com </label>
    </div>
    <div class="message">
        <label class="message-txt"> Made with </label>
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
    height: 84px;
    width: 1800px;
    margin: 0px;
    padding: 0px;
    font-weight: font-weight(light);
    font-size: fonts(font-16);
  }

  .logo .footer-image {
    width: 71px;
    height: 27px;
    margin: 28px 400px 29px 352px;
    padding: 0px;
    float: left;
  }

  .facebook-contact .fa-facebook-official {
    width: 24px;
    height: 24px;
    margin: 34px 10px 26px 0px;
    padding: 0px;
    font-size: 24px;
    float: left;
  }

  .facebook-contact .facebook {
    width: 87px;
    height: 19px;
    margin: 37px 36px 28px 0px;
    padding: 0px;
    font-size: 16px;
    float: left;
  }

  .email-contact .fa-at {
    width: 24px;
    height: 24px;
    margin: 34px 6px 26px 0px;
    padding: 0px;
    font-size: 24px;
    float: left;
  }

  .email-contact .email {
    width: 119px;
    height: 19px;
    margin: 37px 66px 28px 0px;
    padding: 0px;
    font-size: 16px;
    float: left;
  }

  .message .message-txt {
    width: 74px;
    height: 19px;
    margin: 37px 9px 28px 0px;
    padding: 0px;
    font-size: 16px;
    float: left;
  }

  .message .fa-heart {
    color: #DB5757;
    width: 24px;
    height: 20.73px;
    margin: 37px 326px 26.27px 0px;
    font-size: 24px;
    padding: 0px;
    float: left;
  }

  @media (max-width: 1200px) {
    .footer {
      height: 84px;
      width: 100%;
    }

    .logo .footer-image {
      width: 3.94%;
      height: 27px;
      margin: 28px 352px;
      padding: 0px;
      float: left;
    }

    .facebook-contact .fa-facebook-official {
      width: 24px;
      height: 24px;
      margin: 34px 10px 26px 0px;
      padding: 0px;
      font-size: 24px;
      float: left;
    }

    .facebook-contact .facebook {
      width: 87px;
      height: 19px;
      margin: 37px 36px 28px 0px;
      padding: 0px;
      font-size: 16px;
      float: left;
    }

    .email-contact .fa-at {
      width: 24px;
      height: 24px;
      margin: 34px 6px 26px 0px;
      padding: 0px;
      font-size: 24px;
      float: left;
    }

    .email-contact .email {
      width: 119px;
      height: 19px;
      margin: 37px 66px 28px 0px;
      padding: 0px;
      font-size: 16px;
      float: left;
    }

    .message .message-txt {
      width: 75px;
      height: 19px;
      margin: 37px 9px 28px 0px;
      padding: 0px;
      font-size: 16px;
      float: left;
    }

    .message .fa-heart {
      color: #DB5757;
      width: 24px;
      height: 20.73px;
      margin: 37px 326px 26.27px 0px;
      font-size: 24px;
      padding: 0px;
      float: left;
    }
  }
</style>
