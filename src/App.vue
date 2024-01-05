<template>
  <v-app id="app">
    <v-row no-gutters>
      <v-col 
        v-if="$route.path != '/'"
        cols="auto"
      >
      </v-col>
      <v-col>
        <transition mode="out-in">
          <router-view :key="$route.path"/>
        </transition>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="$root.snackbar.enabled"
      :color="$root.snackbar.color"
      :timeout="$root.snackbar.timeout"
    >
      {{ $root.snackbar.text }}
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: "App",
  
  components: {
  },

  methods: {

  },

  created() {
  }
}

</script>

<style lang="scss" scoped>
.v-enter, .v-leave-to {
  opacity: 0;
}

.v-enter-active, .v-leave-active{
  transition: all 150ms ease-out;
}
</style>

<style lang="scss">
// Throw the `expanding-v-data-table` class on the <v-data-table>
// and the `expanding-v-data-table--footer` class on a div in the footer slot.
.expanding-v-data-table {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.expanding-v-data-table--footer {
  flex-grow: 20;
}
</style>
