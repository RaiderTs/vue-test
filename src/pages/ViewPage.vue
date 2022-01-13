<template lang="">
  <v-container >
    <v-select 
        :items="[3,6,9,12]"
        v-model="limit"
        label="Limit of page"
        attach
        class="img-limit"
    ></v-select>                           
    <v-row  class="card-container">
       <ViewImg v-for="(photo,index) in photos"
        :key="index"  :photo="photo"/>
    </v-row>
  </v-container>
</template>

<script>
import ViewImg from "@/components/view/ViewImg.vue";
export default {
     components: {
       ViewImg,
    },
    data: () => ({
        photos: [],
        limit: 3,
    }),
    mounted() {
        this.viewPhoto();
    },
      watch: {
            limit: function()
            {
                this.viewPhoto();
            },
        },
    methods: {
        async viewPhoto() {
            try {
                this.axios.defaults.headers.common = {
                    "x-api-key": "3bc9e1ed-5617-459f-8119-6452e5039b46",
                };
                let response = await this.axios.get(
                    `https://api.thecatapi.com/v1/images/?limit=${this.limit}`,
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
.card-container {
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
}

.img-limit{
  font-weight: 700;
  width: 300px;
  margin: auto;
}


</style>
