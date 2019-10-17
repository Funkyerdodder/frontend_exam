<template>
  <v-container>
    <h2 class="text-center">Weather Bulletin</h2>
    <v-form ref="weatherForm">
      <v-row justify="center">
        <v-col cols="4">
          <v-text-field
            label="City"
            outlined
            v-model="city"
            :error="!isValid"
            :error-messages="!isValid ? 'City not found' : ''"
            :rules="cityRules"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn tile color="#b5a5a5" @click="getWeather">Submit</v-btn>
      </v-row>
    </v-form>
    <div v-if="show">
      <v-row align="center" justify="center" class="ma-4">
        <v-col cols="6">
          <v-card>
            <v-card-title><h4>Current Weather</h4></v-card-title>
            <v-divider></v-divider>
            <v-card-title>{{ location }}, Philippines</v-card-title>
            <v-card-text>{{ currentWeather.date_text }}</v-card-text>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>Temperature:</v-list-item-content>
                <v-list-item-content>{{currentWeather.temp.max}}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Min-Temperature:</v-list-item-content>
                <v-list-item-content>{{currentWeather.temp.min}}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Max-Temperature:</v-list-item-content>
                <v-list-item-content>{{currentWeather.temp.max}}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Humidity:</v-list-item-content>
                <v-list-item-content>{{currentWeather.humidity}}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Wind Speed:</v-list-item-content>
                <v-list-item-content>{{currentWeather.speed}}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Description:</v-list-item-content>
                <v-list-item-content>{{currentWeather.weather[0].description}}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Sunrise:</v-list-item-content>
                <v-list-item-content>{{currentWeather.sunrise}}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Sunset:</v-list-item-content>
                <v-list-item-content>{{currentWeather.sunset}}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Cloud Covered:</v-list-item-content>
                <v-list-item-content>{{currentWeather.clouds}}%</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="ma-4">
        <v-col cols="4" v-for="(weather, index) in forecastWeather" :key="index">
          <v-card>
            <v-card-title>{{ location }}, Philippines</v-card-title>
            <v-card-text>{{ weather.date_text }}</v-card-text>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>Temperature:</v-list-item-content>
                <v-list-item-content>{{weather.temp.max}}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Min-Temperature:</v-list-item-content>
                <v-list-item-content>{{weather.temp.min}}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Max-Temperature:</v-list-item-content>
                <v-list-item-content>{{weather.temp.max}}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Humidity:</v-list-item-content>
                <v-list-item-content>{{weather.humidity}}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Wind Speed:</v-list-item-content>
                <v-list-item-content>{{weather.speed}}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Description:</v-list-item-content>
                <v-list-item-content>{{weather.weather[0].description}}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Cloud Covered:</v-list-item-content>
                <v-list-item-content>{{weather.clouds}}%</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  data: () => ({
    city: '',
    isValid: true,
    show: false,
    currentWeather: [],
    forecastWeather: [],
    location: null,
    cityRules: [
      v => !!v || 'This field is required'
    ]
  }),

  computed: {
  },

  methods: {
    getWeather() {
      if(this.$refs.weatherForm.validate()) {
        this.isValid = true;
        let config = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
        headers: {
          "x-rapidapi-host":"community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":"4sMe2fB80bmshubyDEw1XaQzamkRp15CeyrjsnjXnRhVm9rr1o"
        },
        params: {
          q: `${this.city},ph`,
          units: 'metric',
          cnt: 4
        }
      };

      axios(config)
        .then(res => {
          this.show = true
          let data = res.data;
          const mappedData = data.list.map(c => {
            c.date_text = moment.unix(c.dt).format('ddd, MMMM DD, YYYY @ h:mm a');
            c.sunrise = moment.unix(c.sunrise).format('h:mm a');
            c.sunset = moment.unix(c.sunset).format('h:mm a');
            return c;
          })
          this.location = data.city.name;
          this.forecastWeather = mappedData.slice(1);
          this.currentWeather = mappedData.shift();
        })
        .catch(err => {
          this.show = false;
          this.isValid = false
        });
      }
    },

    getCurrentWeather(data) {
      return data.map(c => {
          c.date_text = moment.unix(c.dt).format('ddd, MMMM DD YYYY, h:mm: a')
          return c;
        })
        .filter(c => {
          let itemDate = moment(c.dt_txt).format('YYYY-MM-DD');
          let date = moment().format('YYYY-MM-DD');
          if(moment(itemDate).isSame(date)) {
            return true;
          }
        })
        .shift();
    }
  }

}

</script>

<style scoped>

</style>