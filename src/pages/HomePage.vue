<template lang="">
  <v-container>
    <v-row class="container">
      <Home
        v-for="(photo,index) in photos"
        :key="index"
        :photo="photo"
        @openPhoto="openPhoto"
      />
    </v-row>
    <DetailPhoto :photo='currentPhoto' v-model='dialogVisible'/>
  </v-container>
</template>

<script>
import Home from "@/components/home/Home.vue";
import DetailPhoto from "@/components/home/DetailPhoto.vue";
export default {
    components: {
        Home,
        DetailPhoto,
    },
    data: () => ({
        photos: [],
        currentPhoto: {},
        dialogVisible: false,
    }),
    mounted() {
        this.fetchedPhoto();
    },
    methods: {
        async fetchedPhoto() {
            try {
                let response = await this.axios.get(
                    "https://api.thecatapi.com/v1/breeds?limit=12&page=1",
                );
                this.photos = response.data;
            } catch (err) {
                console.log(err);
            }
        },
        openPhoto(photo) {
            this.currentPhoto = photo;
            this.dialogVisible = true;
            console.log(photo);
        },
    },
};
</script>

<style lang="css">
.container {
    padding-top: 25px;
    width: 100vw;
}
</style>
