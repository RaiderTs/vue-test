<template>
  <v-container class="container">
    <UploadForm />
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
  },
};
</script>

<style lang="scss">
  .container {
    padding-top: 25px;
}
</style>
