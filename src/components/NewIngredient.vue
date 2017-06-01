<template>
  <span class="new-ingredient">
    <v-list-tile>
      <v-list-tile-action>
        <FoodIcon :icon="ingredient.image"></FoodIcon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          {{ ingredient.title }}
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </span>
</template>

<script>
import FoodIcon from '@/components/FoodIcon'

export default {
  name: 'new_ingredient',
  props: ['ingredient'],
  components: {
    FoodIcon
  }
}
</script>

<style scoped>
.ingredient-icon {
  width: 24px;
}
</style>
