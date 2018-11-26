<template>
  <div class="footer row middle-xs">
    <div class="footer-logo col-xs-3 col-md-6 center-xs">
      <img class="footer-image" src="../assets/images/logo.svg" alt="codex logo">
    </div>
    <div class="footer-information col-xs-9 col-md-6">
      <div class="row middle-xs">
        <div class="footer-social">
          <i class="fa fa-facebook-official" aria-hidden="true" />
          <span class= "footer-social__text"> /codexUdeA </span>
        </div>
        <div class="footer-social">
          <i class="fa fa-at" aria-hidden="true" />
          <span class="footer-social__text"> info@codex.com </span>
        </div>
        <div class="footer-social">
          <span> Made with </span>
          <i class="fa fa-heart" aria-hidden="true" />
        </div>
      </div>
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
    color: color(white);
    padding: 20px;
    font-weight: font-weight(light);
    font-size: font(font-16);
  }

  .footer-social {
    margin-right: 20px;
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

  @media (max-width: 992px){
    .footer {
      padding-left: 50px;
      font-size: font(font-14);
    }

    .footer-social {
      margin-right: 15px;
    }

    .fa {
      padding: 5px;
      font-size: font(font-14);
    }
  }

  @media (max-width: 767px){
    .footer {
      padding-left: 50px;
      font-size: font(font-14);
    }

    .footer-social {
      margin-right: 15px;
    }

    .fa {
      padding: 3px;
      font-size: font(font-14);
    }
  }

  @media (max-width: 560px){
    .footer {
      font-size: font(font-12);
    }

    .footer-logo .footer-image {
      width: 58px;
    }

    .footer-social {
      margin-right: 10px;
    }

    .fa {
      padding: 2px;
      font-size: font(font-12);
    }
  }
</style>
