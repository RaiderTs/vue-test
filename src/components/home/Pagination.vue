<template lang="">
    <div>
        <div class="text-center">
            <v-pagination
               class="mb-10"
               v-model="currentPage"
              :length="getNumPages"
               :total-visible="7"
              @input='changePage'
            ></v-pagination>
    </div>
    </div>
</template>
<script>
export default {
    props: {
        page: {
            type: Number,
            required: true,
        },
        getNumPages: {
            type: Number,
            required: true,
        }
    },
    data() {
        return {
            currentPage: 1
        }
    },
    methods: {
        changePage(page){
           this.$emit('changePage', page)
        }
    },
};
</script>
<style lang="css">
</style>