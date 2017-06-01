<template>
  <v-chip>
    <v-avatar>
      <FoodIcon :icon="this.ingredient.image"></FoodIcon>
    </v-avatar>
    {{ ingredient.title }}
  </v-chip>
</template>

<script>
import FoodIcon from '@/components/FoodIcon'

export default {
  name: 'ingredient',
  props: ['ingredient'],
  components: {
    FoodIcon
  }
}
</script>

<style scoped>
.ingredient-icon {
  width: 60px;
}

.chip .avatar {
  height: 60px;
  width: 60px;
  padding: 10px;
  background: #fff;
  border: 1px solid #e0e0e0;
}

.chip .avatar img {
  border-radius: 0;
}
</style>
