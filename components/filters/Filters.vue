<template>
    <div class="filters">
         <div class="filters__search"> 
            <div class="search">
                <input v-model="searchKeywords" @change="searchKeywordsChangeHandler" />
            </div>
        </div>        

        <div class="filters__price"> 
            <div class="min"> min price input </div>
            <div class="max"> max price input </div>
        </div>

        <div class="filters__ratings"> 
            <div class="min"> dropdown with min rating to select </div>
        </div>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "Filters",
    data() {
        return {
            searchKeywords: null
        }
    },
    methods: {
        searchKeywordsChangeHandler() {
            this.$emit('filters-keywords', this.searchKeywords);
        }
    }
})
</script>