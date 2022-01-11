<template lang="">
  <v-container
    fluid
    class="input-container"
  >
    <!-- <v-text-field v-model="name" label="Enter title photo" /> -->
    <v-file-input
      v-model="file"
      label="Choose New Image"
    />
    <v-layout
      align-center
      justify-center
    >
      <v-btn
        color="green"
        dark
        large
        class="btn"
        @click="addPhoto"
      >
        UPLOAD New Image
      </v-btn>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    sub_id: "",
    // name: "",
    file: null,
  }),
  methods: {
    addPhoto() {
      let photo = new FormData();
      photo.append("file", this.file, "file");
      photo.append("sub_id", Date.now());
      // photo.append("name", this.name);
      this.$emit("addPhoto", photo);
    },
  },
};
</script>
<style lang="scss">
.input-container {
  background-color: rgb(231, 222, 222);
  box-shadow: 12px -13px 24px 1px rgba(34, 60, 80, 0.36);
  border-radius: 5px;
  margin-top: 200px;
  padding: 30px;
  width: 500px;
}

.btn {
  margin-top: 100px;
  color: white;
}
</style>
