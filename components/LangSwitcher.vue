<template>
  <li class="navbar__item dropdown" @click.prevent="langOpen = !langOpen">
    <span
      id="langSwitcher"
      data-toggle="dropdown"
      type="button"
      aria-haspopup="true"
      aria-expanded="false"
      class="navbar__link dropdown-toggle"
    >
      <img :src="`${currentLocale.code}.png`" :alt="currentLocale.name" />
      {{ currentLocale.name }}
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
        :to="switchLocalePath(locale.code)"
        >{{ locale.name }}</nuxt-link
      >
    </div>
  </li>
</template>

<script>
export default {
  name: 'LangSwitcher',
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
