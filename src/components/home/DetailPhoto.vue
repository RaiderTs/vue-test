<template>
    <v-dialog v-model="dialogVisible" max-width="600">
        <v-card>
            <v-card-title>
                {{ photo.name }}
            </v-card-title>
            <v-card-text>
                <v-img :src="photo.image.url" width="400" height="400" />              
            </v-card-text>
             <v-text name='description'>{{ photo.description }}</v-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        photo: {
            type: Object,
            required: true,
        },
        value: {
            type: Boolean,
            default: false,
        },
    },
    created(){
       this.dialogVisible = this.value
    },
    data: () => ({
        dialogVisible: false
    }),
    watch: {
        value(newValue){
            this.dialogVisible = newValue
        },
        dialogVisible(newValue){
            this.$emit('input', newValue)
        }
    },
    // computed: {
    //     img(){
    //         return this.photo.image.url
    //     }
    // }
};
</script>

<style lang="css" scoped>
</style>>
