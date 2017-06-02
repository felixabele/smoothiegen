<template>
  <div class="ingredient-menu">
    <v-navigation-drawer
      v-model="ingredient_menu"
      persistent
      :mini-variant="mini_variant"
      temporary
      light
    >
      <v-list>
        <v-list-item>
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <FoodIcon :icon="main_icon"></FoodIcon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Ingredients</v-list-tile-title>
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

    <v-dialog v-model="dialog">
      <v-card>
        <v-card-row>
          <v-card-title>{{ selected_ingredient.title }}</v-card-title>
        </v-card-row>

        <v-card-row>
          <v-card-text>
            <v-flex xs9>
              <v-slider
                dark
                :label="selected_ingredient.unit"
                :max="selected_ingredient.max"
                :min="selected_ingredient.min"
                :step="selected_ingredient.step"
                v-model="selected_ingredient.quantity"
              >
            </v-slider>
            </v-flex>
            <v-flex xs3>
              <v-text-field dark v-model="selected_ingredient.quantity" type="number"></v-text-field>
            </v-flex>
          </v-card-text>
        </v-card-row>

        <v-card-row actions>
          <v-btn flat dark @click.native="dialog=false" class="text-left">Cancel</v-btn>
          <v-btn light success @click.native="addItem()">Add <v-icon right light>check_circle</v-icon></v-btn>
        </v-card-row>
      </v-card>
    </v-dialog>

    <v-bottom-nav value="true" class="transparent">
      <v-btn flat dark class="teal--text" @click.native.stop="ingredient_menu = !ingredient_menu">
        <span>Add ingredient</span>
        <v-icon>control_point</v-icon>
      </v-btn>
    </v-bottom-nav>
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
      main_icon: 'groceries.png',
      ingredient_menu: false,
      dialog: false,
      mini_variant: false,
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
