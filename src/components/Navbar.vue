<template>
  <v-container
    fluid
  >
    <v-app-bar
      color="red"
      dark
    >
      <v-spacer />
      <v-btn
      outlined
      color="red"
      >
        <router-link to="/">
          Home
        </router-link>
      </v-btn>
      <v-btn
        outlined
        class="ml-5"
        color="red"
        
      >
        <router-link to="/cats/new">
          Upload
        </router-link>
      </v-btn>
      <v-btn
        outlined
        class="ml-5"
        color="red"
     
      >
        <router-link to="/cats/my">
          View
        </router-link>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {};
</script>


<style lang="css">

</style> 