<template>
  <div class="smoothie">
    <h1>{{ name }}</h1>

    <h2>All Ingredients</h2>
    <IngredientMenu :ingredients="allIngredients"></IngredientMenu>

    <h2>Selected Ingredients</h2>
    <ul class="ingredients">
      <ActiveIngredient v-for="ingredient in selectedIngredients"
        :key="ingredient.id"
        :ingredient="ingredient">
      </ActiveIngredient>
    </ul>
  </div>
</template>

<script>
import ActiveIngredient from '@/components/ActiveIngredient'
import NewIngredient    from '@/components/NewIngredient'
import IngredientMenu   from '@/components/IngredientMenu'

export default {
  name: 'smoothie',
  components: {
    ActiveIngredient,
    NewIngredient,
    IngredientMenu
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
