<template>
  <section id="about-us">
    <div class="container">
      <section-title
        :title="$t('whoWeAre')"
        :description="$t('whoWeAreDescription')"
      ></section-title>
      <div class="row">
        <div class="col-12 col-md-6 mb-4 mb-md-0">
          <img src="mobileapp.png" alt="mobile app" class="img-fluid" />
        </div>
        <div class="col-12 col-md-6">
          <div class="boxes">
            <div v-for="(item, idx) in whoWeAre" :key="idx" class="box">
              <div class="left">&lt;/&gt;</div>
              <div class="right">
                <h4>{{ $t(`whoWeAreItems.${item}`) }}</h4>
                <p>{{ $t(`whoWeAreItems.${item}Description`) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
export default {
  components: { SectionTitle },
  data() {
    return {
      whoWeAre: ['knowledge', 'expirience', 'team'],
    }
  },
}
</script>

<style></style>
