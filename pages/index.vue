<template>
<div class="page">
  <Header/>
  <Hero/>
  <section>
    <div class="container">
 <section-title :title="$t('services')" :description="$t('servicesDescription')"/>

    <div class="row">
      <div v-for="i in 6" :key="i" class="col-12 col-md-6 col-lg-4">
        <div class="services-item">
        <h4>{{$t('servicesItems.softwareDevelopment')}}</h4>
        <p>{{$t('servicesItems.softwareDevelopmentDescription')}}</p>
        </div>
    
      </div>
    </div>
     </div>
  </section>
   
   
</div>
  
</template>

<script>
export default {

  name:'LandingPage',

}
</script>
