<template>
  <li class="navbar__item dropdown" @click.prevent="langOpen = !langOpen">
    <span
      id="langSwitcher"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      class="navbar__link navbar__link--red navbar__dropdown"
    >
      <img :src="`${currentLocale.code}.png`" :alt="currentLocale.name" />
      {{ currentLocale.name }}
      <ArrowIcon />
    </span>
    <div
      :class="langOpen ? 'd-block' : null"
      class="dropdown-menu"
      aria-labelledby="langSwitcher"
    >
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        class="dropdown-item"
        :to="switchLocalePath(locale.code).split('#')[0]"
      >
        <img :src="`${locale.code}.png`" :alt="locale.name" />

        {{ locale.name }}</nuxt-link
      >
    </div>
  </li>
</template>

<script>
import ArrowIcon from '~/assets/svg/arrow.svg?inline'

export default {
  name: 'LangSwitcher',
  components: { ArrowIcon },
  data() {
    return {
      currentLang: 'PL',
      langOpen: false,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    currentLocale() {
      return this.$i18n.localeProperties
    },
  },
  mounted() {
    console.log(this.$i18n)
  },
}
</script>

<style lang="scss"></style>
