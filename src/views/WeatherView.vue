<template>
  <div class="wrapper">
    <nav-bar-weather></nav-bar-weather>
    <weather-content></weather-content>
  </div>
</template>

<script>
import NavBarWeather from '@/components/NavBarWeather.vue';
import WeatherContent from '@/components/WeatherContent.vue';

export default {
  components: { NavBarWeather, WeatherContent }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.wrapper {
  width: 100%;
  height: 100%;
  background: $weather-bg;
  position: absolute;
  min-height: 300px;
}
</style>