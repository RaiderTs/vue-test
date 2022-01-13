<template lang="">

  <v-col class='col' cols="3">
    <v-card   @click="openPhoto" class='card' >
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
    methods: {
     openPhoto() {
       this.$emit('openPhoto', this.photo )
     }
    }
  }



</script>

<style lang="css">
 .card-text{
   margin-top: 15px;
 }

 .text{
   padding: 20px;
 }

 .card-title{
   display: flex;
   justify-content: center;
   padding: 20px;
 }
.col {
  box-shadow: 16px 16px 28px 0px rgba(34, 60, 80, 0.2);
  padding: 2px;
  transition: transition 250ms cubic-bezier(0.4, 0, 0.2, 1)
}

.col:hover{
  transform: scale(1,01);
  border: 1px solid red
}

.card {
  margin: 19px;
  background-color: antiquewhite;
}

.card-img {
  margin: auto;
}


</style>
