<template>
  <div class="mixer">
    <div class="mixer-ingredients">
      <div class="mixer-ingredient"
        v-for="ingredient in ingredients"
        :key="ingredient.id"
        :style="ingredientStyle(ingredient)"
        :class="ingredientClass(ingredient)"
      >
      </div>
    </div>
    <div class="mixer-cover"></div>
  </div>
</template>

<script>
export default {
  name: 'mixer',
  props: ['ingredients'],
  computed: {
    absoluteVolume() {
      return this.ingredients
        .map((i) => i.quantity * i.weight)
        .reduce((i1, i2) => i1 + i2, 0)
    }
  },
  methods: {
    ingredientStyle: function(ingredient) {
      const percentage = (100.0/this.absoluteVolume) * ingredient.quantity * ingredient.weight
      return {
        height: percentage +'%'
      }
    },
    ingredientClass: function(ingredient) {
      return ingredient.title.toLowerCase().replace(/[^a-z0-9]+/g,'-')
    }
  }
}
</script>

<style lang="stylus">
.mixer {
  position: relative;
  width: 400px;
  height: 400px;
}

.mixer-cover {
  background-image: url("/static/mixer.png");
  background-size: auto 100%;
  height: 100%;
  width: 100%;
  position: absolute;
}

.mixer-ingredients {
  position: absolute;
  height: 100%;
  width: 100%;
  padding-bottom: 80px;
  padding-top: 80px;
}
</style>
