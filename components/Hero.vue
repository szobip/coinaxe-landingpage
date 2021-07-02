<template>
  <section class="hero">
      <div class="hero__content">
 <h1>{{$t('heroTitle')}}</h1>
    <p>{{$t('heroSlogan')}}</p>
    <div class="cta-section">
        <nuxt-link to="#" class="btn btn-danger">{{$t('more')}}</nuxt-link>
        <nuxt-link to="#" class="btn btn-secondary ml-3">{{$t('contact')}}</nuxt-link>

    </div>
      </div>
   
  </section>
</template>

<script>
export default {
name:'Hero'
}
</script>

<style>

</style>