<template>
  <div class="footer">
    <img src="../assets/images/logo.svg" alt="codex logo">
    <div class="contact">
      <i class="fa fa-facebook-official" aria-hidden="true" />/codexUdeA
      <i class="fa fa-at" aria-hidden="true" />info@codex.com
      <div class="message">
        Made with <i class="fa fa-heart" aria-hidden="true" />
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
  @font-face {
    font-family:'Roboto';
    src: url('../assets/fonts/Roboto-Regular.ttf') format("truetype");
  }

  .footer {
    background-color: color(astronaut);
    color: white;
    height: 65px;
    padding: 0px;
    border-top: 2px solid white;
    border-left: none;
    border-right: none;
    border-bottom: none;
    font-family: "Roboto";
    font-weight: lighter;
    font-size: 16px;

    @media (max-width: 500px) {
      height: 45px;
      font-size: 8px;
    }
  }

  .footer img {
    margin: 20px 250px;
    width: 60px;

    @media (max-width: 500px) {
      margin: 15px 2% 15px 10%;
      width: 30px;
    }
  }

  .footer div {
    margin: 20px 250px 20px 50px;
    padding: 0px;
    float: right;

    @media (max-width: 500px) {
      margin: 15px 10% 15px 2%;
    }
  }

  .footer i {
    margin: 0px 5px 0px 0px;
    font-size: 20px;

    @media (max-width: 500px){
      margin: 0px 3px 0px 2px;
      font-size: 10px;
    }
  }

  .contact .fa-heart {
    margin: 0px 3px;
    color: #DB5757;
  }

  .contact .message {
    margin: 0px 15px 0px 10px;

    @media (max-width: 500px){
      margin: 0px 3px 0px 5px;
    }
  }
</style>
