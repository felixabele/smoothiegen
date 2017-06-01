<template>
  <div class="ingredient-menu">
    <v-btn light success @click.native="ingredient_menu=!ingredient_menu">
      Add ingredient
      <v-icon right light>control_point</v-icon>
    </v-btn>

    <v-dialog v-model="dialog">
      <v-card>
        <v-card-row actions>
          <v-btn flat dark @click.native="dialog=false" class="text-left">Cancel</v-btn>
          <v-btn light success @click.native="addItem()">
            Add {{ selected_ingredient.title }}
            <v-icon right light>check_circle</v-icon>
          </v-btn>
        </v-card-row>
      </v-card>
    </v-dialog>

    <v-navigation-drawer
      v-model="ingredient_menu"
      persistent
      absolute
      height="100%"
      light
    >
      <v-list>
        <v-list-item>
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon dark @click.native.stop="ingredient_menu = !ingredient_menu">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-item>
      </v-list>
      <v-list dense>
        <template v-for="(item, i) in items">
          <v-list-group v-if="item.children" v-model="item.model" no-action>
            <v-list-item slot="item">
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>{{ item.model ? item.icon : item['icon-alt'] }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-item>
            <v-list-item v-for="(child, i) in item.children" :key="i">
              <a v-on:click.stop="openItemDialog(child)">
                <NewIngredient :ingredient="child"></NewIngredient>
              </a>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import NewIngredient from '@/components/NewIngredient'
import FoodIcon from '@/components/FoodIcon'

export default {
  name: 'ingredient_menu',
  props: ['ingredients'],
  components: {
    NewIngredient,
    FoodIcon
  },
  methods: {
    addItem() {
      this.$store.commit('add', this.selected_ingredient)
      this.dialog = false
    },
    openItemDialog(ingredient) {
      this.selected_ingredient = ingredient
      this.dialog = true
    }
  },
  data() {
    return {
      ingredient_menu: false,
      dialog: false,
      selected_ingredient: {},
      items: [
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Fruit',
          model: true,
          children: this.ingredients.filter(i => i.category == 'fruit')
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Vegetables',
          model: true,
          children: this.ingredients.filter(i => i.category == 'vegetable')
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Others',
          model: true,
          children: this.ingredients.filter(i => i.category == 'other')
        }
      ]
    }
  }
}
</script>
