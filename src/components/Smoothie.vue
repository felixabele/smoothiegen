<template>
  <div class="smoothie">
    <v-container fluid>
      <h2>Selected Ingredients</h2>
      <ul class="ingredients">
        <ActiveIngredient v-for="ingredient in selectedIngredients"
          :key="ingredient.id"
          :ingredient="ingredient">
        </ActiveIngredient>
      </ul>

      <Mixer :ingredients="selectedIngredients"></Mixer>
    </v-container>
    <IngredientMenu :ingredients="allIngredients"></IngredientMenu>
  </div>
</template>

<script>
import ActiveIngredient from '@/components/ActiveIngredient'
import NewIngredient    from '@/components/NewIngredient'
import IngredientMenu   from '@/components/IngredientMenu'
import Mixer            from '@/components/Mixer'

export default {
  name: 'smoothie',
  components: {
    ActiveIngredient,
    NewIngredient,
    IngredientMenu,
    Mixer
  },
  data() {
    return {
      name: "My Smoothie"
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
