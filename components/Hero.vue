<template>
  <section class="hero">
    <div class="container">
      <div class="hero__content">
        <h1>{{ $t('heroTitle') }}</h1>
        <p>{{ $t('heroSlogan') }}</p>
        <div class="cta-section">
          <nuxt-link to="#services" class="btn btn-danger"
            >{{ $t('services') }}
          </nuxt-link>
          <nuxt-link to="#contact" class="btn btn-secondary ml-3"
            >{{ $t('contact') }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style></style>
