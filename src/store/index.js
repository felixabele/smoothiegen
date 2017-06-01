import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    all_items: [
      // Fruit
      {title: 'Apple', image: 'apple-1.png', category: 'fruit', id: 1},
      {title: 'Banana', image: 'banana.png', category: 'fruit', id: 2},
      {title: 'Blueberries', image: 'blueberries.png', category: 'fruit', id: 3},
      {title: 'Cherries', image: 'cherries.png', category: 'fruit', id: 4},
      {title: 'Coconut', image: 'coconut.png', category: 'fruit', id: 5},
      {title: 'Fig', image: 'fig.png', category: 'fruit', id: 6},
      {title: 'Grapes', image: 'grapes.png', category: 'fruit', id: 7},
      {title: 'Hazelnut', image: 'hazelnut.png', category: 'fruit', id: 8},
      {title: 'Lemon', image: 'lemon-1.png', category: 'fruit', id: 9},
      {title: 'Lime', image: 'lime.png', category: 'fruit', id: 10},
      {title: 'Orange', image: 'orange.png', category: 'fruit', id: 11},
      {title: 'Peach', image: 'peach.png', category: 'fruit', id: 12},
      {title: 'Pear', image: 'pear.png', category: 'fruit', id: 13},
      {title: 'Pineapple', image: 'pineapple.png', category: 'fruit', id: 14},
      {title: 'Pistachio', image: 'pistachio.png', category: 'fruit', id: 15},
      {title: 'Pomegranate', image: 'pomegranate.png', category: 'fruit', id: 16},
      {title: 'Raspberry', image: 'raspberry.png', category: 'fruit', id: 17},
      {title: 'Seeds', image: 'seeds.png', category: 'fruit', id: 18},
      {title: 'Strawberry', image: 'strawberry.png', category: 'fruit', id: 19},
      {title: 'Watermelon', image: 'watermelon.png', category: 'fruit', id: 20},

      // Vegetables
      {title: 'Asparagus', image: 'asparagus.png', category: 'vegetable', id: 30},
      {title: 'Aubergine', image: 'aubergine.png', category: 'vegetable', id: 31},
      {title: 'Avocado', image: 'avocado.png', category: 'vegetable', id: 32},
      {title: 'Beans', image: 'beans.png', category: 'vegetable', id: 33},
      {title: 'Broccoli', image: 'broccoli.png', category: 'vegetable', id: 34},
      {title: 'Cabbage', image: 'cabbage.png', category: 'vegetable', id: 35},
      {title: 'Cauliflower', image: 'cauliflower.png', category: 'vegetable', id: 36},
      {title: 'Carrot', image: 'carrot.png', category: 'vegetable', id: 37},
      {title: 'Chili', image: 'chili.png', category: 'vegetable', id: 38},
      {title: 'Chives', image: 'chives.png', category: 'vegetable', id: 39},
      {title: 'Corn', image: 'corn.png', category: 'vegetable', id: 40},
      {title: 'Cucumber', image: 'cucumber.png', category: 'vegetable', id: 41},
      {title: 'Garlic', image: 'garlic.png', category: 'vegetable', id: 42},
      {title: 'Mushrooms', image: 'mushrooms.png', category: 'vegetable', id: 43},
      {title: 'Olives', image: 'olives.png', category: 'vegetable', id: 44},
      {title: 'Onion', image: 'onion.png', category: 'vegetable', id: 45},
      {title: 'Peas', image: 'peas.png', category: 'vegetable', id: 46},
      {title: 'Pepper', image: 'pepper.png', category: 'vegetable', id: 47},
      {title: 'Pumpkin', image: 'pumpkin.png', category: 'vegetable', id: 48},
      {title: 'Radish', image: 'radish.png', category: 'vegetable', id: 49},
      {title: 'Salad', image: 'salad-1.png', category: 'vegetable', id: 50},
      {title: 'Tomato', image: 'tomato.png', category: 'vegetable', id: 51},

      // Others
      {title: 'Chocolate', image: 'chocolate.png', category: 'other', id: 60},
      {title: 'Coffee', image: 'coffee-maker.png', category: 'other', id: 61},
      {title: 'Eggs', image: 'eggs.png', category: 'other', id: 62},
      {title: 'Grain', image: 'grain.png', category: 'other', id: 63},
      {title: 'oil', image: 'oil.png', category: 'other', id: 70},
      {title: 'Milk', image: 'milk-1.png', category: 'other', id: 71},
      {title: 'Joghurt', image: 'milk.png', category: 'other', id: 72},
    ],
    selected_items: [],
  },

  mutations: {
    add(state, item) {
      state.selected_items.push(item)
    },
    remove(state, item) {
      state.selected_items = state.selected_items.filter(i => i.id != item.id)
    }
  },
  getters: {
    allItems(state) {
      return _.difference(state.all_items, state.selected_items)
    },
    selectedItems(state) {
      return state.selected_items
    }
  }
})
