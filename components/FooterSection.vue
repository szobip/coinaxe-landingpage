<template>
  <footer class="footer section--dark">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 mb-5 mb-md-0">
          <img src="logo.png" class="img-fluid" alt="COINAXE" />
        </div>
        <div class="col-12 col-md-6">
          <h5>{{ $t('office') }}</h5>
          <ul>
            <li class="footer-address">
              <PinIcon />14 East, Level 5, Sliema Road, GZR 1639 Gzira, Malta
            </li>
            <li class="footer-address">
              <a class="reset-link" href="mailto:office@coinaxe.eu"
                ><MailIcon />office@coinaxe.eu
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="container">
      <p class="text-center">© 2021 CoinAxe Ltd. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
import PinIcon from '~/assets/svg/pin.svg?inline'
import MailIcon from '~/assets/svg/mail.svg?inline'

export default {
  name: 'Footer',
  components: { PinIcon, MailIcon },
  data() {
    return {}
  },
}
</script>

<style></style>
