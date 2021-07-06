<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <a href="/" class="logo"><img src="logo.png" alt="COINAXE" /> </a>

        <ul class="navbar__menu" :class="isOpen ? 'open' : null">
          <li class="navbar__item">
            <nuxt-link
              :to="{ path: $route.path, hash: '#home' }"
              class="navbar__link"
              >{{ $t('navbar.home') }}</nuxt-link
            >
          </li>
          <li class="navbar__item">
            <nuxt-link
              :to="{ path: $route.path, hash: '#services' }"
              class="navbar__link"
              >{{ $t('navbar.service') }}</nuxt-link
            >
          </li>
          <li class="navbar__item">
            <nuxt-link
              :to="{ path: $route.path, hash: '#how-we-work' }"
              class="navbar__link"
              >{{ $t('navbar.howWork') }}</nuxt-link
            >
          </li>
          <li class="navbar__item">
            <nuxt-link
              :to="{ path: $route.path, hash: '#about-us' }"
              class="navbar__link"
              >{{ $t('navbar.about') }}</nuxt-link
            >
          </li>
          <li class="navbar__item">
            <nuxt-link
              :to="{ path: $route.path, hash: '#contact' }"
              class="navbar__link"
              >{{ $t('navbar.contact') }}</nuxt-link
            >
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
  watch: {
    '$route.hash'() {
      this.isOpen = false
    },
  },
}
</script>

<style></style>
