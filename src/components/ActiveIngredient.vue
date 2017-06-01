<template>
  <span class="active-ingredient">
    <v-dialog v-model="dialog">
      <Ingredient slot="activator" :key="ingredient.id" :ingredient="ingredient"></Ingredient>

      <v-card>
        <v-card-row actions>
          <v-btn flat dark @click.native="dialog=false" class="text-left">Cancel</v-btn>
          <v-btn light error @click.native="removeItem()">
            Remove {{ ingredient.title }}
            <v-icon right light>check_circle</v-icon>
          </v-btn>
        </v-card-row>
      </v-card>
    </v-dialog>
  </span>
</template>

<script>
import Ingredient from '@/components/Ingredient'

export default {
  name: 'active_ingredient',
  props: ['ingredient'],
  components: {
    Ingredient
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    removeItem: function() {
      this.$store.commit('remove', this.ingredient)
    }
  }
}
</script>
