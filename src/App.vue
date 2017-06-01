<template>
  <div id="app">
    <v-app>
      <v-toolbar>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-toolbar-items class="hidden-md-and-down">
          <v-toolbar-item ripple @click.native="goto('/')">Home</v-toolbar-item>
          <v-toolbar-item ripple @click.native="goto('/smoothie')">Smoothie</v-toolbar-item>
        </v-toolbar-items>
      </v-toolbar>
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
      <v-footer></v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'Smoothie'
    }
  },
  methods: {
    goto(target) {
      this.$router.push(target)
    }
  }
}
</script>

<style lang="stylus">
@import './stylus/main';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
