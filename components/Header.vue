<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <a href="http://gamerhash.com/" class="logo"
          ><img src="coinaxe_logo.png" alt="COINAXE" />
        </a>

        <ul class="navbar__menu" :class="isOpen ? 'open' : null">
          <li class="navbar__item">
            <a href="#" class="navbar__link">{{ $t('navbar.home') }}</a>
          </li>
          <li class="navbar__item">
            <a href="#" class="navbar__link">{{ $t('navbar.service') }}</a>
          </li>
          <li class="navbar__item">
            <a href="#" class="navbar__link">{{ $t('navbar.howWork') }}</a>
          </li>
          <li class="navbar__item">
            <a href="#" class="navbar__link">{{ $t('navbar.about') }}</a>
          </li>
          <li class="navbar__item">
            <a href="#" class="navbar__link">{{ $t('navbar.contact') }}</a>
          </li>
          <lang-switcher />
        </ul>
        <div
          class="burger"
          :class="isOpen ? 'open' : null"
          @click.prevent="isOpen = !isOpen"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import LangSwitcher from './LangSwitcher.vue'
export default {
  name: 'Header',
  components: { LangSwitcher },
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style></style>
