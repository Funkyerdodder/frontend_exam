<template>
  <v-container>
    <h2>Currency Converter</h2>
    <v-form ref="currencyForm">
      <v-row>
        <v-col cols="2">
          <v-text-field
            type="number"
            v-model="amount"
            label="Amount"
            :rules="amountRules"
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-select
            v-model="currentCurrency"
            label="Current Currency"
            :items="currencyItems"
            :rules="currentRules"
          ></v-select>
        </v-col>
        <v-col cols="5">
          <v-select
            v-model="convertCurrency"
            label="Convert to"
            :items="currencyItems"
            multiple
            :rules="convertRules"
          ></v-select>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-btn depressed color="primary" @click="convert">Convert</v-btn>
      </v-row>
    </v-form>
    <v-row>
      <v-col cols="6" v-for="(item, index) in dataItem" :key="index">
        <v-card>
          <v-card-text>
            <!-- {{ item.amount }}, {{ item.curr }} -->
            {{ item.amount + " " + item.from }} = {{ item.computedAmount + " " + item.curr }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    // valid:
    amount: null,
    convertedAmount: null,
    currentCurrency: null,
    convertCurrency: [],
    currencyItems: [],
    dataItem: [],
    amountRules: [
      v => !!v || 'This field is required'
    ],
    currentRules: [
      v => !!v || 'This field is required'
    ],
    convertRules: [
      v => v.length > 0 || 'This field is required',
      v => v.length < 5 || 'Maximum of 5 selected items only'
    ]
  }),

  created() {
    let config = {
      method: 'GET',
      url: 'https://currency-exchange.p.rapidapi.com/listquotes',
      headers: {
        "x-rapidapi-host":"currency-exchange.p.rapidapi.com",
        "x-rapidapi-key":"4sMe2fB80bmshubyDEw1XaQzamkRp15CeyrjsnjXnRhVm9rr1o"
      }
    };
    axios(config)
      .then(res => this.currencyItems = res.data)
      .catch(err => console.log(err));
  },

  methods: {
    convert() {
      if(this.$refs.currencyForm.validate()) {
        this.dataItem = [];
        this.convertCurrency.forEach(item => {
          let config = {
            method: 'GET',
            url: 'https://currency-exchange.p.rapidapi.com/exchange',
            params: {
              from: this.currentCurrency,
              to: item
            },
            headers: {
              "x-rapidapi-host":"currency-exchange.p.rapidapi.com",
              "x-rapidapi-key":"4sMe2fB80bmshubyDEw1XaQzamkRp15CeyrjsnjXnRhVm9rr1o"
            }
          }
          axios(config)
            .then(res => {
              // let computedAmount = this.amount * res.data;
              this.dataItem.push({ computedAmount: (this.amount * res.data).toFixed(2), curr: item, from: this.currentCurrency, amount: this.amount});
              
            })
            .catch(err => console.log(err));
        });
        console.log(this.dataItem);
      }
    }
  }
}
</script>

<style scoped>

</style>