<template>
    <svg v-if="id === 'rating'" xmlns="http://www.w3.org/2000/svg" height="24" width="24">  
        <path d="M5.625 22.3 8.025 14.45 1.65 9.9H9.5L12 1.625L14.5 9.9H22.35L15.975 14.45L18.375 22.3L12 17.45Z"/>
    </svg>
    <svg v-else-if="id === 'somethingelse'" xmlns="http://www.w3.org/2000/svg" height="24" width="24">  
        <path d="M5.625 22.3 8.025 14.45 1.65 9.9H9.5L12 1.625L14.5 9.9H22.35L15.975 14.45L18.375 22.3L12 17.45Z"/>
    </svg>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "SvgIcon",
    props: {
        id: {
            type: String,
            required: true
        }        
    }
})
</script>