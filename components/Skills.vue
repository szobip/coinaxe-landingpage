<template>
  <section class="section--dark">
    <div class="container">
      <section-title :title="$t('skills')"></section-title>

      <div class="row">
        <div class="col-12 col-md-6">
          <div class="progress-box">
            <h5>
              {{ $t('progressProject') }}
            </h5>

            <div class="progress">
              <div
                class="
                  progress-bar progress-bar-striped progress-bar-animated
                  bg-danger
                "
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 85%"
              >
                <div class="picker">85%</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="progress-box">
            <h5>
              {{ $t('progressUxui') }}
            </h5>

            <div class="progress">
              <div
                class="
                  progress-bar progress-bar-striped progress-bar-animated
                  bg-danger
                "
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 80%"
              >
                <div class="picker">80%</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="progress-box">
            <h5>
              {{ $t('progressProgramming') }}
            </h5>

            <div class="progress">
              <div
                class="
                  progress-bar progress-bar-striped progress-bar-animated
                  bg-danger
                "
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 95%"
              >
                <div class="picker">95%</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="progress-box">
            <h5>
              {{ $t('progressTesting') }}
            </h5>

            <div class="progress">
              <div
                class="
                  progress-bar progress-bar-striped progress-bar-animated
                  bg-danger
                "
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 90%"
              >
                <div class="picker">90%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
}
</script>

<style></style>
