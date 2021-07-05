<template>
  <section id="services">
    <div class="container">
      <section-title
        :title="$t('services')"
        :description="$t('servicesDescription')"
      />

      <div class="row">
        <div
          v-for="service in services"
          :key="service.title.trim()"
          class="col-12 col-md-6 col-lg-4"
        >
          <div class="services-item">
            <div
              class="services-icon"
              v-html="require(`../assets/svg/${service.icon}.svg?raw`)"
            />
            <h4>{{ $t(`servicesItems.${service.title}`) }}</h4>
            <p>{{ $t(`servicesItems.${service.desc}`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          title: 'softwareDevelopment',
          desc: 'softwareDevelopmentDescription',
          icon: 'laptop-code',
        },
        {
          title: 'mobileApps',
          desc: 'mobileAppsDescription',
          icon: 'mobile',
        },
        {
          title: 'itCoach',
          desc: 'itCoachDescription',
          icon: 'laptop-solid',
        },
        {
          title: 'uiux',
          desc: 'uiuxDescription',
          icon: 'diagram',
        },
        {
          title: 'testing',
          desc: 'testingDescription',
          icon: 'bracket',
        },
        {
          title: 'team',
          desc: 'teamDescription',
          icon: 'team',
        },
      ],
    }
  },
}
</script>

<style></style>
