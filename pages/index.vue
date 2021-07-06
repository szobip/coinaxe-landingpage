<template>
  <div id="home" class="page">
    <Header />
    <Hero />
    <Services />
    <HowWork />
    <AboutUs />
    <Skills />
    <Contact />
    <FooterSection />
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
    return {}
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('seo.description'),
        },
        ...i18nHead.meta,
      ],
    }
  },
  watch: {
    '$route.hash'(news) {
      console.log(news)
      if (news.lenght > 0) {
        this.$router.push({ path: this.$route.path, hash: '' })
      }

      // this.$router.push(this.$route.path)
    },
  },
}
</script>
