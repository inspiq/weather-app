<template>
  <div class="weather">
    <div class="container">
      <div class="weather__nav">
        <div class="weather__left">
          <router-link :to="'/'">
            <svg width="24" height="24">
              <use xlink:href="@/assets/icons.svg#arrow-back"></use>
            </svg>
            <p>Назад</p>
          </router-link>
        </div>
        <div class="weather__right">
          <svg width="24" height="24" class="favorites-mini">
            <use xlink:href="@/assets/icons.svg#favorites-mini"></use>
          </svg>
        </div>
      </div>
      <div class="weather__info">
        <div class="weather__city">
          <h1>{{ this.$store.state.cityName }}</h1>
          <p>{{ this.$store.state.description }}</p>
        </div>
        <div class="weather__degrees">
          <div class="weather__degrees-desc">{{ this.$store.state.temperature }}°</div>
          <div class="weather__degrees-img" v-if="this.$store.state.main === 'Clear'">
            <svg width="200" height="200">
              <use xlink:href="@/assets/icons.svg#clear"></use>
            </svg>
          </div>
          <div class="weather__degrees-img" v-else-if="this.$store.state.main === 'Clouds'">
            <svg width="200" height="200">
              <use xlink:href="@/assets/icons.svg#clouds"></use>
            </svg>
          </div>
          <div class="weather__degrees-img" v-else-if="this.$store.state.main === 'Drizzle'">
            <svg width="200" height="200">
              <use xlink:href="@/assets/icons.svg#drizzle"></use>
            </svg>
          </div>
          <div class="weather__degrees-img" v-else-if="this.$store.state.main === 'Rain'">
            <svg width="200" height="200">
              <use xlink:href="@/assets/icons.svg#rain"></use>
            </svg>
          </div>
          <div class="weather__degrees-img" v-else-if="this.$store.state.main === 'Squall'">
            <svg width="200" height="200">
              <use xlink:href="@/assets/icons.svg#squall"></use>
            </svg>
          </div>
          <div class="weather__degrees-img" v-else-if="this.$store.state.main === 'Tornado'">
            <svg width="200" height="200">
              <use xlink:href="@/assets/icons.svg#tornado"></use>
            </svg>
          </div>
          <div class="weather__degrees-img" v-else-if="this.$store.state.main === 'Ash'">
            <svg width="200" height="200">
              <use xlink:href="@/assets/icons.svg#ash"></use>
            </svg>
          </div>
          <div class="weather__degrees-img" v-else-if="this.$store.state.main === 'Sand'">
            <svg width="200" height="200">
              <use xlink:href="@/assets/icons.svg#sand"></use>
            </svg>
          </div>
          <div class="weather__degrees-img" v-else-if="this.$store.state.main === 'Dust'">
            <svg width="200" height="200">
              <use xlink:href="@/assets/icons.svg#dust"></use>
            </svg>
          </div>
          <div class="weather__degrees-img" v-else-if="this.$store.state.main === 'Snow'">
            <svg width="200" height="200">
              <use xlink:href="@/assets/icons.svg#snow"></use>
            </svg>
          </div>
        </div>
        <div class="weather__barometer">
          <div class="weather__barometer-icon">
            <svg width="24" height="24">
              <use xlink:href="@/assets/icons.svg#barometer"></use>
            </svg>
          </div>
          <div class="weather__barometer-desc">{{ this.$store.state.pressure }} мм рт. ст.</div>
        </div>
        <div class="weather__sunset">
          Закат в {{ this.$store.state.sunset }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.weather {
  padding-top: 25px;

  @media (max-width: 450px) {
    padding-top: 20px;
  }

  &__nav {
    display: flex;
    margin-left: 12px;
    margin-right: 12px;

    @media (max-width: 450px) {
      margin-left: 0px;
      margin-right: 0px;
    }
  }

  &__left > a {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  &__right {
    display: flex;
    margin-left: auto;
  }

  &__left > a > p {
    color: $blue;
    font-weight: $regular;
    font-size: $size-main;
    margin-left: 12px;

    @media (max-width: 450px) {
      display: none;
    }
  }

  &__info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 30px;

    @media (max-width: 450px) {
      margin-top: 40px;
    }
  }

  &__city {
    text-align: center;
  }

  &__city > h1 {
    color: $white;
    font-size: $size-title;
    font-weight: $medium;

    @media (max-width: 450px) {
      font-size: $size-title-phone;
    }
  }

  &__city > p {
    color: $white;
    font-weight: $regular!important;
    font-size: $size-main;
    margin-top: 16px;

    @media (max-width: 450px) {
      font-size: $size-main-phone;
    }
  }

  &__degrees {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;

    @media (max-width: 450px) {
      flex-direction: column;
      margin-top: 16px;
    }
  }

  &__degrees-desc {
    font-size: $size-title-degrees;
    background: $gradient-degrees-bg;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: $semibold;
    margin-right: 20px;

    @media (max-width: 450px) {
      margin-right: 0px;
      font-size: $size-title-degrees-phone;
    }
  }

  &__barometer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }

  &__barometer-desc {
    color: $white;
    font-weight: $regular;
    font-size: $size-main;
  }

  &__barometer-icon {
    margin-right: 10px;
  }

  &__sunset {
    text-align: center;
    margin-top: 30px;
    font-size: $size-main;
    color: $blue;
    font-weight: $regular;
  }
}
</style>