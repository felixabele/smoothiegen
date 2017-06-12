<template>
  <v-list-item>

    <v-list-tile @click.native.stop="dialog=true">
      <v-list-tile-avatar>
        <FoodIcon :icon="ingredient.image"></FoodIcon>
      </v-list-tile-avatar>

      <v-list-tile-content>
        <v-list-tile-title v-html="ingredient.title"></v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-dialog v-model="dialog" fullscreen>
      <v-card>
        <v-card-row>
          <v-card-title>{{ ingredient.title }}</v-card-title>
        </v-card-row>

        <v-card-row v-if="ingredient.nutrients.length">
          <table>
            <tr class="ingredient-nutrients" v-for="nutrient in ingredient.nutrients">
              <th class="text-xs-left">
                {{ nutrient.name }}
              </th>
              <td class="text-xs-right">
                {{ nutrientTotal(nutrient.value) }}
              </td>
              <td class="text-xs-left">
                {{ nutrient.unit }}
              </td>
            </tr>
          </table>
        </v-card-row>

        <v-card-row>
          <v-card-text>
            <v-slider
              dark
              :label="ingredient.unit"
              :max="ingredient.max"
              :min="ingredient.min"
              :step="ingredient.step"
              v-model="ingredient.quantity"
            >
            </v-slider>
            <v-text-field dark v-model="ingredient.quantity" type="number"></v-text-field>
          </v-card-text>
        </v-card-row>

        <v-card-row actions>
          <v-btn flat dark @click.native="dialog=false">
            Close <v-icon right light>check_circle</v-icon>
          </v-btn>
          <v-btn light error @click.native="removeItem()">
            Remove <v-icon right light>check_circle</v-icon>
          </v-btn>
        </v-card-row>
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script>
import FoodIcon from '@/components/FoodIcon'
import _ from 'lodash'

export default {
  name: 'active_ingredient',
  props: ['ingredient'],
  components: {
    FoodIcon
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    nutrientTotal: function(val) {
      let total = (val * this.ingredient.quantity * this.ingredient.weight) / 100
      return _.round(total, 2)
    },
    removeItem: function() {
      this.$store.commit('remove', this.ingredient)
    }
  }
}
</script>

<style scoped>
.avatar img {
  border-radius: 0;
}
</style>
