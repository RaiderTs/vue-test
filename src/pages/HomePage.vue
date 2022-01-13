<template lang="">
  <v-container>
      <Pagination  @changePage="fetchedPhoto" :page="page" :getNumPages="getNumPages"/>
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
import Pagination from "@/components/home/Pagination.vue";
import Home from "@/components/home/Home.vue";
import DetailPhoto from "@/components/home/DetailPhoto.vue";
export default {
    components: {
        Home,
        DetailPhoto,
        Pagination,
    },
    data: () => ({
        photos: [],
        currentPhoto: {},
        dialogVisible: false,
        page: 1,
        limit: 12,
        pagination_count: 0,

    }),
    watch: {
            page: function()
            {
                this.fetchedPhoto();
            },
            limit: function()
            {
                this.fetchedPhoto();
            },
        },
    mounted() {
        this.fetchedPhoto(this.page);
    },
    computed:{

        getNumPages: function()
            {
            return Math.floor(this.pagination_count / this.limit) | 0;
            }
        },
    methods: {
        async fetchedPhoto() {
            try {
                this.axios.defaults.headers.common['x-api-key'] = "3bc9e1ed-5617-459f-8119-6452e5039b46"
                let query_params = {
                        limit: this.limit,
                        page: this.page,
                    }
                let response = await this.axios.get(
                    'https://api.thecatapi.com/v1/images/search', { params: query_params } 
                );
                this.pagination_count = response.headers['pagination-count'];
                this.photos = response.data;
            } catch (err) {
                console.log(err);
            }
        },
        openPhoto(photo) {
            this.currentPhoto = photo;
            this.dialogVisible = true;
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
