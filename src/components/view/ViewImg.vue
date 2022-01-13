<template lang="">
  <v-col class='col' cols="4" >
    <v-card   class='card' >
      <v-card-text class='card-text'>
        <v-img  class='card-img' :src="photo.url" width="250" height="250" />
      </v-card-text> 
    </v-card>
  </v-col>
</template>

<script>
export default {
    props: {
        photo: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="css">
</style>
