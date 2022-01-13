<template lang="">
            <v-container fluid class="input-container">
                    <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">              
                    <v-img :src="image_url" height="500px" v-if="image_url" contain></v-img>
                    <v-text-field label="Select new image" @click='pickFile' v-model='image_name'></v-text-field>
                        <input
                            type="file"
                            style="display: none"
                            ref="image"
                            accept="image/*"
                            @change="onFilePicked"
                        >
                    </v-flex>
                    <v-layout align-center justify-center>
                        <v-btn v-show="!uploading" color="green" dark large @click="pickFile" class="mr-5">
                            Choose New Image
                        </v-btn>
                        <v-btn v-show="image_file && !uploading" color="blue" dark large @click="uploadFile" >
                            Upload
                        </v-btn>
                        <div v-show="uploading">Uploading...</div>
                    </v-layout>
                <v-alert class="mt-10" v-show="error_message"
                    :value="true"
                    type="error"
                  >{{error_message}}</v-alert>                        
            </v-container>
</template>
<script>
export default {
    data: () => ({
        image_name: "",
        image_file: "",
        image_url: "",
        uploading: false,
        uploaded_image: {},
        headers: [{ text: "Name" }, { text: "Confidence" }],
        error_message: null,
    }),
    methods: {
        pickFile() {
            this.error_message = null;
            this.$refs.image.click();
        },

        onFilePicked(e) {
            const files = e.target.files;
            if (files[0] !== undefined) {
                const readImg = new FileReader();
                readImg.readAsDataURL(files[0]);
                readImg.addEventListener("load", () => {
                    this.image_url = readImg.result;
                    this.image_file = files[0];
                });
            } else {
                this.image_name = "";
                this.image_file = "";
                this.image_url = "";
            }
        },
        async uploadFile() {
            this.uploading = true;
            let formData = new FormData();
            formData.append("file", this.image_file);

            try {
                this.axios.defaults.headers.common["x-api-key"] =
                    "3bc9e1ed-5617-459f-8119-6452e5039b46";
                let response = await this.axios.post(
                    "https://api.thecatapi.com/v1/images/upload",
                    formData,
                    { headers: { "Content-Type": "multipart/form-data" } },
                );
                console.log(response.data);
                this.uploaded_image = response.data;
                this.uploading = false;
                this.image_file = null;
            } catch (error) {
                console.log(error);
                this.error_message = error.response.data.message;
                this.uploading = false;
                this.image_file = null;
            }
        },
    },
};
</script>
<style lang="scss">
.input-container {
    background-color: rgb(231, 222, 222);
    box-shadow: 12px -13px 24px 1px rgba(34, 60, 80, 0.36);
    border-radius: 5px;
    margin-top: 100px;
    padding: 30px;
    width: 700px;
}
</style>
