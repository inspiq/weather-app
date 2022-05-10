<template>
  <div class="content">
    <div class="container">
      <div class="content__search">
        <form>
          <input
            placeholder="Укажите город"
            type="text"
            id="search"
            class="input"
            v-model="citySearch"
            @keypress.enter.prevent
            autocomplete="off"
          >
          <ul
            class="content__cities"
            v-if="searchCities.length"
          >
            <router-link :to="'/weather'" @click="getWeather">
              <li
                v-for="cities in searchCities"
                :key="cities.city"
                @click="selectCities(cities.city)"
              >
                {{ cities.city }}
              </li>
            </router-link>
          </ul>
        </form>
      </div>
      <div class="content__tip">
        <div class="content__arrow">
          <svg width="38" height="32">
            <use xlink:href="@/assets/icons.svg#arrow"></use>
          </svg>
        </div>
        <p class="content__tip-desc">
          Начните вводить город,
          <br>
          например, 
          <router-link :to="'/weather'" @click="getWeatherTip">
            <span>Ижевск</span>
          </router-link>
        </p>
      </div>
      <div class="content__tip-favorites">
        <p class="content__tip-desc">
          Используйте значек «закладки»,
          <br>
          чтобы закрепить город на главной
        </p>
        <div class="content__favorites-icon">
          <svg width="40" height="40">
            <use xlink:href="@/assets/icons.svg#favorites"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import cities from '@/data/cities.json'
import dateFormat, { masks } from "dateformat"

export default {
  setup() {
    let citySearch = ref('')

    const searchCities = computed(() => {
      if (citySearch.value === '') {
        return []
      }

      let matches = 0

      return cities.filter(cityName => {
        if (cityName.city.toLowerCase().includes(citySearch.value.toLowerCase()) && matches < 1 && citySearch.value.length > 2) {
          matches++
          return cityName
        }
      })
    });

    const selectCities = (cityName) => {
      citySearch.value = cityName
    }

    return {
      cities,
      citySearch,
      searchCities,
      selectCities,
    }
  },
  methods: {
    getWeather: async function () {
      let citySearch = ref('')
      console.log(citySearch)

      const key = "39ee81ab78056f5566ce02a4c2ee1a66"
      const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${this.citySearch}&appid=${key}&units=metric&lang=ru`
      const res = await fetch(baseURL)
      const data = await res.json()
      console.log(data)

      this.$store.state.cityName = data.name
      this.$store.state.description = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
      this.$store.state.main = data.weather[0].main;
      this.$store.state.temperature = Math.round(data.main.temp)
      this.$store.state.pressure = data.main.pressure
      this.$store.state.sunset = dateFormat(new Date(data.sys.sunset * 1000), "GMT:HH:MM")
    },
    getWeatherTip: async function () {
      const key = "39ee81ab78056f5566ce02a4c2ee1a66"
      const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=Ижевск&appid=${key}&units=metric&lang=ru`
      const res = await fetch(baseURL)
      const data = await res.json()
      console.log(data)

      this.$store.state.cityName = data.name
      this.$store.state.description = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
      this.$store.state.main = data.weather[0].main;
      this.$store.state.temperature = Math.round(data.main.temp)
      this.$store.state.pressure = data.main.pressure
      this.$store.state.sunset = dateFormat(new Date(data.sys.sunset * 1000), "GMT:HH:MM")
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.navbar {
  height: 65px;
  background: $navbar-bg;

  &__logo {
    height: 65px;
  }

  @media (max-width: 450px) {
    background: $home-bg;
  }
}

.content {
  margin-top: 80px;

  @media (max-width: 450px) {
    margin-top: 20px;
  }

  &__search > form {
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  &__search > form > input {
    max-width: 510px;
    width: 100%;
    height: 56px;
    padding: 20px;
    outline: none;
    border: none;
    background: $input-bg;
    font-size: $size-main;
    font-weight: $regular;
    color: $white;
    border-radius: 2px;
    font-family: $font-body;
  }

  &__search > form > input::placeholder {
    font-size: $size-main;
    font-weight: $regular;
    font-family: $font-body;
    color: $blue;
  }

  &__tip {
    margin-top: 45px;
    text-align: center;
    position: relative;
  }

  &__tip-desc {
    color: $blue;
    font-weight: $regular;
    font-size: $size-main;
  }

  &__tip-desc > a > span {
    color: $white;
    border-bottom: 1px dashed $white;
  }

  &__arrow {
    position: absolute;
    left: 0;
    right: 218px;
    bottom: 18px;
  }

  &__tip-favorites {
    margin-top: 90px;
    text-align: center;
  }

  &__favorites-icon {
    margin-top: 20px;
  }

  &__cities {
    color: $white;
    background: $autocomplete-bg;
    width: 100%;
    max-width: 510px;
    height: 59px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-radius: 0px 0px 5px 5px;
    position: absolute;
    z-index: 1000;
    top: 55px;
  }

  &__search > form > ul > a > li {
    font-size: $size-main;
    font-weight: $regular;
    color: $white;
    cursor: pointer;
  }
}
</style>