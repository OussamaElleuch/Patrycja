<template>
    <div class="rating">
        <span v-for="i in rate" :key="i"> 
            <svg-icon id="rating"></svg-icon>
        </span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SvgIcon from './SvgIcon.vue'
export default Vue.extend({
  components: { SvgIcon },
    name: "Rating",
    props: {
        rate: {
            type: Number,
            required: true
        }
    }
})
</script>
