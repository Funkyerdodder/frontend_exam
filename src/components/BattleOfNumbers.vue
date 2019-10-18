<template>
  <div>
    <h2 class="text-center">Battle of Numbers</h2>
    <v-form ref="form">
      <v-row justify="center">
        <v-col cols="4">
          <v-text-field
            label="Number of contestant"
            v-mask="mask"
            outlined
            v-model.number="numContestant"
          ></v-text-field>
        </v-col>
      </v-row>
      
      <div v-if="hidden">
        <v-row justify="center" v-for="(entry, index) in numContestant" :key="index">
          <v-col cols="4">
            <v-text-field
              :label="'Contestant #' + (index + 1)"
              outlined
              type="number"
              v-model.number="nums[index]"
              :rules="contestantRules"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn tile color="#b5a5a5" @click="simulate">Submit</v-btn>
        </v-row>
      </div>
      <v-row align="center" v-if="logs.length" justify="center" class="ma-4">
        <v-col cols="4" v-for="(log, index) in logs" :key="index">
          <v-card>
            <v-card-title><h4>{{ log.bracket }}</h4></v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-item v-for="(list, index) in log.lists" :key="index">
                <v-list-item-content>Round {{ list.round }}:</v-list-item-content>
                <v-list-item-content>{{ list.desc }}</v-list-item-content>
                <v-list-item-content>Winner: {{ list.winner }}</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <v-row align="center" v-if="logs.length" justify="center" class="ma-4">
        <v-col cols="12">
          <v-card>
            <v-card-title><h4>Summary</h4></v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>Winner</v-list-item-content>
                <v-list-item-content>{{ winner }}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Total Bracket</v-list-item-content>
                <v-list-item-content>{{ total_bracket }}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Total Round</v-list-item-content>
                <v-list-item-content>{{ total_rounds }}</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'
export default {

  directives: {
    mask
  },

  data: () => ({
    mask: '#######',
    nums: [],
    numContestant: null,
    logs: [],
    contestantRules: [
      v => !!v || 'This field is required'
    ],
    winner: null,
    total_rounds: null,
    total_bracket: null,
  }),

  computed: {
    hidden: function() {
      return this.numContestant ? true : false
    }
  },

  methods: {
    simulate() {
      if(this.$refs.form.validate()) {
        let number = this.nums;
        let bracketCount = 1; //bracket counter
        let roundCount = 1; //round counter
        
        let data = [];
        while (number.length > 1) { // iteration for bracket
          let list = [];
          console.log(`Bracket #${bracketCount}`);
          var int = 0;
          while (int < number.length) { //iteration for round
            let maxNum = Math.max(number[int], number[number.length - 1]); //get the max number
            list.push({ 
              round:roundCount, 
              desc:`${number[int]} vs ${number[number.length - 1]}`, 
              winner: maxNum,
            });
            number.splice(int, 1, maxNum) // push the max number to the array
            if (int != number.length - 1) {
              number.splice(-1, 1) //delete the loser number
            }
            int++; //counters
            roundCount++; //counters
          }
          data.push({bracket: `Bracket #${bracketCount}`, lists: list});
          this.winner = number[0];
          this.total_bracket = bracketCount;
          this.total_rounds = roundCount; 
          bracketCount++; //counters
        }
        this.nums = [];
        this.numContestant = null;
        this.logs = data;
      }
    }
  }
}
</script>

<style>

</style>