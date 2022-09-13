<template>
  <div class="filters">
    <div class="filters__search">
      <div class="search">
        <input v-model="searchKeywords" @change="searchKeywordsChangeHandler" />
      </div>
    </div>

    <div class="filters__price">
      <div>
        <label>min price input</label>
        <input
          v-model="searchPrice.min"
          class="min"
          @change="searchPriceHandler"
        />
      </div>
      <div>
        <label>max price input</label>
        <input
          v-model="searchPrice.max"
          class="max"
          @change="searchPriceHandler"
        />
      </div>
    </div>

    <div class="filters__ratings">
      <div class="min">dropdown with min rating to select</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Filters',
  data() {
    return {
      searchKeywords: null,
      searchPrice: { min: 0, max: 0 },
    }
  },
  methods: {
    searchKeywordsChangeHandler() {
      this.$emit('filtered-keywords', this.searchKeywords)
    },
    searchPriceHandler() {
      this.$emit('filtered-price', this.searchPrice)
    },
  },
})
</script>

<style lang="scss">
.filters {
  display: flex;
}
</style>
