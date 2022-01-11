<template>
  <v-container class="container">
    <UploadForm @addPhoto="addPhoto" />
  </v-container>
</template>

<script>
import UploadForm from "@/components/upload/UploadForm.vue";
export default {
  name: "App",
  components: {
    UploadForm,
  },
  mounted() {},
  methods: {
    async addPhoto(photo) {
      try {
        this.axios.defaults.headers.common = {"x-api-key":  "3bc9e1ed-5617-459f-8119-6452e5039b46"};
        let response = await this.axios.post(
          "https://api.thecatapi.com/v1/images/upload",
          photo,
          { headers: { "Content-Type": "multipart/form-data;" } }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss"></style>
