<template>
  <section class="section--dark">
    <SectionTitle :title="$t('howWork')" />
    <div class="container">
      <div class="row">
        <div
          v-for="(howWork, idx) in howWorks"
          :key="idx + 1"
          class="col-12 col-6 col-3"
        >
          <div class="howwork">
            <span class="howwork__number">{{ idx + 1 }}</span>
            <h4 class="howwork__title">{{ $t(`howWork`) }}</h4>
            <p class="howwork__description">
              {{ $t(`${howWork}Description`) }}
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
