<template>
  <v-layout row wrap class="nutrient">
    <v-flex xs7 class="nutrient-name">
      {{ nutrient.name }}
    </v-flex>
    <v-flex xs3 class="nutrient-total">
      <span>
        {{ nutrientTotal }}
      </span>
      {{ nutrient.unit }}
    </v-flex>
    <v-flex xs2 class="nutrient-daily" v-if="dailyPercentage">
      <strong>{{ dailyPercentage }}</strong> %
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'nutrient',
  props: [
    'nutrient',
    'id',
    'ingredients',
    'nutrients'
  ],
  computed: {
    nutrientTotal() {
      let id = this.id
      const nutrientVal = function(i) {
        try {
          return parseFloat(_.find(i.nutrients, {nutrient_id: id}).value)
        } catch(e) {
          return 0.0
        }
      }
      return _.round(
        this.ingredients
          .map(nutrientVal)
          .reduce((i1, i2) => i1 + i2, 0),
        2)
    },
    dailyPercentage() {
      if (this.nutrient.daily > 0) {
        return _.round((this.nutrientTotal/this.nutrient.daily * 100))
      }
    }
  }
}
</script>

<style scoped>
.nutrient-name {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  font-weight: bold;
}

.nutrient-total {
  white-space: nowrap;
  text-align: left
}
.nutrient-total span {
  text-align: right;
  font-weight: bold;
  margin-right: 10px;
  width: 40px;
  display: block;
  float: left
}
.nutrient-daily {
  text-align: right;
  white-space: nowrap;
}
</style>
