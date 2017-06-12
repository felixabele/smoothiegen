<template>
  <div class="smoothie">
    <v-container fluid>
      <h2>Selected Ingredients</h2>

      <v-layout row wrap>
        <v-flex md4 xs12>
          <Mixer :ingredients="selectedIngredients"></Mixer>
        </v-flex>

        <v-flex md4 xs12 v-if="selectedIngredients.length">
          <v-card class="ma-2">
            <v-list two-line>
              <ActiveIngredient v-for="ingredient in selectedIngredients"
                :key="ingredient.id"
                :ingredient="ingredient">
              </ActiveIngredient>
            </v-list>
          </v-card>
        </v-flex>

        <v-flex md4 xs12>
          <v-card class="ma-2 pa-4">
            <Nutrient
              :nutrient="nutrient"
              :id="id"
              :key="id"
              :ingredients="selectedIngredients"
              :nutrients="nutrients"
              v-for="(nutrient, id) in nutrients"
              >
            </Nutrient>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <IngredientMenu :ingredients="allIngredients"></IngredientMenu>
  </div>
</template>

<script>
import ActiveIngredient from '@/components/ActiveIngredient'
import NewIngredient    from '@/components/NewIngredient'
import IngredientMenu   from '@/components/IngredientMenu'
import Mixer            from '@/components/Mixer'
import Nutrient         from '@/components/Nutrient'

export default {
  name: 'smoothie',
  components: {
    ActiveIngredient,
    NewIngredient,
    IngredientMenu,
    Mixer,
    Nutrient
  },
  data() {
    return {
      name: "My Smoothie",
      nutrients: {
        255: {name: "Water", unit: "g"},
        208: {name: "Energy", unit: "kcal"},
        203: {name: "Protein", unit: "g"},
        204: {name: "Total lipid (fat)", unit: "g"},
        205: {name: "Carbohydrate, by difference", unit: "g"},
        291: {name: "Fiber, total dietary", unit: "g"},
        269: {name: "Sugars, total", unit: "g"},
        301: {name: "Calcium, Ca", unit: "mg", daily: 1000},
        303: {name: "Iron, Fe", unit: "mg", daily: 13},
        304: {name: "Magnesium, Mg", unit: "mg", daily: 330},
        // 305: {name: "Phosphorus, P", unit: "mg"},
        306: {name: "Potassium, K", unit: "mg", daily: 4000},
        // 307: {name: "Sodium, Na", unit: "mg"},
        309: {name: "Zinc, Zn", unit: "mg", daily: 9},
        401: {name: "Vitamin C, total ascorbic acid", unit: "mg", daily: 100},
        // 404: {name: "Thiamin", unit: "mg"},
        //405: {name: "Riboflavin", unit: "mg"},
        406: {name: "Niacin", unit: "mg", daily: 14},
        415: {name: "Vitamin B-6", unit: "mg", daily: 1.4},
        435: {name: "Folate, DFE", unit: "µg", daily: 300},
        418: {name: "Vitamin B-12", unit: "µg", daily: 3.0},
        320: {name: "Vitamin A, RAE", unit: "µg", daily: 800},
        // 318: {name: "Vitamin A, IU", unit: "IU"},
        323: {name: "Vitamin E (alpha-tocopherol)", unit: "mg", daily: 13},
        328: {name: "Vitamin D (D2 + D3)", unit: "µg", daily: 20},
        // 324: {name: "Vitamin D", unit: "IU"},
        430: {name: "Vitamin K (phylloquinone)", unit: "µg", daily: 65},
        606: {name: "Fatty acids, total saturated", unit: "g"},
        645: {name: "Fatty acids, total monounsaturated", unit: "g"},
        646: {name: "Fatty acids, total polyunsaturated", unit: "g"},
        605: {name: "Fatty acids, total trans", unit: "g"},
        601: {name: "Cholesterol", unit: "mg"},
        // 262: {name: "Caffeine", unit: "mg"},
      }
    }
  },
  computed: {
    allIngredients() {
      return this.$store.getters.allItems
    },
    selectedIngredients() {
      return this.$store.getters.selectedItems
    }
  }
}
</script>
