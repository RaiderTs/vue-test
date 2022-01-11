<template lang="">
  <v-container >
    <v-row class="row">  
       <v-col class='col' cols="3">
    <v-card   class='card' >
      <v-card-text class='card-text'>
      <v-img v-for="(photo,index) in photos"
        :key="index"  :src="photo.url" width="250" height="250" />
      </v-card-text> 
    </v-card>
  </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        photos: [],
    }),
    mounted() {
        this.viewPhoto();
    },
    methods: {
        async viewPhoto() {
            try {
                this.axios.defaults.headers.common = {
                    "x-api-key": "3bc9e1ed-5617-459f-8119-6452e5039b46",
                };
                let response = await this.axios.get(
                    "https://api.thecatapi.com/v1/images",
                );
                this.photos = response.data;
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style lang="css">

.row {
    padding-top: 25px;
    width: 100vw;
}

</style>
