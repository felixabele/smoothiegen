import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

const item_defaults = {unit: 'g', min: 10, max: 500, step: 10, quantity: null, weight: 1, nutrients: []}
const api_key = 'AMy7Ff8GPUPIDvza7OHMGHkoDzpPyw61NLX3NWgB'

let items =
  [
    // Fruit
    {title: 'Apple', image: 'apple-1.png', category: 'fruit', id: '09003'},
    {title: 'Banana', image: 'banana.png', category: 'fruit', id: '09040'},
    {title: 'Blueberries', image: 'blueberries.png', category: 'fruit', id: '09050'},
    {title: 'Cherries', image: 'cherries.png', category: 'fruit', id: '09063'},
    {title: 'Coconut Water', image: 'coconut.png', category: 'fruit', id: '12119'},
    {title: 'Fig', image: 'fig.png', category: 'fruit', id: '09089'},
    {title: 'Grapes', image: 'grapes.png', category: 'fruit', id: '09132'},
    {title: 'Hazelnut', image: 'hazelnut.png', category: 'fruit', id: '12120'},
    {title: 'Lemon', image: 'lemon-1.png', category: 'fruit', id: '09150'},
    {title: 'Lime', image: 'lime.png', category: 'fruit', id: '09159'},
    {title: 'Orange', image: 'orange.png', category: 'fruit', id: '09200'},
    {title: 'Peach', image: 'peach.png', category: 'fruit', id: '09236'},
    {title: 'Pear', image: 'pear.png', category: 'fruit', id: '09252'},
    {title: 'Pineapple', image: 'pineapple.png', category: 'fruit', id: '09266'},
    {title: 'Pistachio', image: 'pistachio.png', category: 'fruit', id: '12151'},
    {title: 'Pomegranate', image: 'pomegranate.png', category: 'fruit', id: '09286'},
    {title: 'Raspberry', image: 'raspberry.png', category: 'fruit', id: '09302'},
    {title: 'Strawberry', image: 'strawberry.png', category: 'fruit', id: '09316'},
    {title: 'Watermelon', image: 'watermelon.png', category: 'fruit', id: '09326'},

    // Vegetables
    {title: 'Asparagus', image: 'asparagus.png', category: 'vegetable', id: '11011'},
    {title: 'Aubergine', image: 'aubergine.png', category: 'vegetable', id: '11209'},
    {title: 'Avocado', image: 'avocado.png', category: 'vegetable', id: '09037'},
    {title: 'Beans', image: 'beans.png', category: 'vegetable', id: '11052'},
    {title: 'Broccoli', image: 'broccoli.png', category: 'vegetable', id: '11090'},
    {title: 'Cabbage', image: 'cabbage.png', category: 'vegetable', id: '11109'},
    {title: 'Cauliflower', image: 'cauliflower.png', category: 'vegetable', id: '11135'},
    {title: 'Carrot', image: 'carrot.png', category: 'vegetable', id: '11124'},
    {title: 'Chili', image: 'chili.png', category: 'vegetable', id: '11819'},
    {title: 'Chives', image: 'chives.png', category: 'vegetable', id: '11156'},
    {title: 'Corn', image: 'corn.png', category: 'vegetable', id: '11167'},
    {title: 'Cucumber', image: 'cucumber.png', category: 'vegetable', id: '11206'},
    {title: 'Garlic', image: 'garlic.png', category: 'vegetable', id: '11215'},
    {title: 'Mushrooms', image: 'mushrooms.png', category: 'vegetable', id: '11260'},
    {title: 'Olives', image: 'olives.png', category: 'vegetable', id: '09195'},
    {title: 'Onion', image: 'onion.png', category: 'vegetable', id: '11282'},
    {title: 'Peas', image: 'peas.png', category: 'vegetable', id: '11304'},
    {title: 'Pepper', image: 'pepper.png', category: 'vegetable', id: '11333'},
    {title: 'Pumpkin', image: 'pumpkin.png', category: 'vegetable', id: '11422'},
    {title: 'Radish', image: 'radish.png', category: 'vegetable', id: '11429'},
    {title: 'Lettuce', image: 'salad-1.png', category: 'vegetable', id: '11253'},
    {title: 'Tomato', image: 'tomato.png', category: 'vegetable', id: '11529'},

    // Others
    {title: 'Eggs', image: 'eggs.png', category: 'other', id: '01123', unit: 'pcs', min: 1, max: 10, step: 1, weight: 50},
    {title: 'oil', image: 'oil.png', category: 'other', id: '04042', unit: 'ml', min: 5, max: 200, step: 5},
    {title: 'Milk', image: 'milk-1.png', category: 'other', id: '01078', unit: 'ml', min: 50, max: 1000, step: 10},
    {title: 'Yogurt', image: 'milk.png', category: 'other', id: '01116', unit: 'g', min: 10, max: 500, step: 10},
  ]

items.forEach(item => _.defaults(item, item_defaults))

// https://api.nal.usda.gov/ndb/V2/reports?ndbno=01123&type=b&format=json&api_key=AMy7Ff8GPUPIDvza7OHMGHkoDzpPyw61NLX3NWgB

export default new Vuex.Store({
  state: {
    all_items: items,
    selected_items: [],
  },

  mutations: {
    add(state, item) {

      Vue.http.get('https://api.nal.usda.gov/ndb/V2/reports?ndbno='+ item.id +'&type=b&format=json&api_key='+ api_key).then(response => {
        const food = response.body.foods[0].food
        item.nutrients = food.nutrients
        state.selected_items.push(item)
      });
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
