<template>
  <v-app>
    <Navigation />

    <v-container fluid>
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>
import Navigation from './views/Navigation';
export default {
  name: "App",
  components: {
    Navigation
  }
}
</script>
