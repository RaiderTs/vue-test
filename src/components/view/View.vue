<template lang="">

  <v-col class='col' cols="3">
    <v-card   class='card' >
      <!-- <v-card-title class='card-title'>{{photo.name}}</v-card-title> -->
      <v-card-text class='card-text'>
        <v-img  class='card-img' :src="photo.url" width="250" height="250" />
        <!-- <v-text class='text'>{{photo.description}}</v-text> -->
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
.card-text {
    /* display: flex;
   height: 350px; */
    margin-top: 15px;
}

.text {
    padding: 20px;
}

.card-title {
    display: flex;
    justify-content: center;
    padding: 20px;
}
.col {
    box-shadow: 16px 16px 28px 0px rgba(34, 60, 80, 0.2);
    padding: 0;
    background: cornsilk;
    border: 1px solid red;
}

.card {
    margin: 19px;
    background-color: antiquewhite;
}

.card-img {
    margin: auto;
}
</style>
