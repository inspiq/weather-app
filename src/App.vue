<template>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      cityName: "",
      description: "",
      temperature: "",
      pressure: "",
      sunset: ""
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/vars.scss';

html, body {
  width: 100%;
  height: 100%;
  position: relative;
  font-family: $font-body;
}

* {
  margin: 0px;
  padding: 0px;
}

*,
::before,
::after {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

.container {
  max-width: 1152px;
  padding: 0 20px;
  margin: auto;
}
</style>
