<template>
  <section id="how-we-work" class="section--dark">
    <SectionTitle :title="$t('howWork')" />
    <div class="container">
      <div class="row">
        <div
          v-for="(howWork, idx) in howWorks"
          :key="idx + 1"
          class="col-12 col-md-6 col-lg-3"
        >
          <div class="howwork">
            <h4 class="howwork__title">
              <span class="howwork__number">{{ idx + 1 }}</span>
              {{ $t(`howWorkItems.${howWork}`) }}
            </h4>
            <p class="howwork__description">
              {{ $t(`howWorkItems.${howWork}Description`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowWork',
  data() {
    return {
      howWorks: ['analytics', 'project', 'production', 'implementation'],
    }
  },
}
</script>
