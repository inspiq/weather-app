<template>
  <div class="wrapper">
    <nav-bar-home />
    <home-content />
  </div>
</template>

<script>
import NavBarHome from '@/components/NavBarHome.vue';
import HomeContent from '@/components/HomeContent.vue';

export default {
  components: { NavBarHome, HomeContent }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.wrapper {
  width: 100%;
  height: 100%;
  background: $home-bg;
  position: absolute;
  min-height: 300px;
}
</style>
