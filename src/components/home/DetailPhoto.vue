<template>
    <v-dialog v-model="dialogVisible" max-width="600">
        <v-card>
            <v-card-text class="dialog-card-text" style="padding-top: 25px">
                <v-img :src="photo.url" width="400" height="400" />
            </v-card-text>
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
    created() {
        this.dialogVisible = this.value;
    },
    data: () => ({
        dialogVisible: false,
    }),
    watch: {
        value(newValue) {
            this.dialogVisible = newValue;
        },
        dialogVisible(newValue) {
            this.$emit("input", newValue);
        },
    },
};
</script>

<style lang="css" scoped>
.dialog-card-text {
    display: flex;
    padding-top: 20px;
}
</style>>
