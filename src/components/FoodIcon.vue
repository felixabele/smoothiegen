<template>
  <img :src="image" class="ingredient-icon">
</template>

<script>
export default {
  name: 'food_icon',
  props: ['icon'],
  computed: {
    image() {
      return '../static/food-icons/'+ this.icon
    }
  }
}
</script>
