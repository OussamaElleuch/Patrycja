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
          v-model="searchMinPrice"
          class="min"
          @change="searchMinPriceHandler"
        />
      </div>
      <div>
        <label>max price input</label>
        <input
          v-model="searchMaxPrice"
          class="max"
          @change="searchMaxPriceHandler"
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
      searchMinPrice: 0,
      searchMaxPrice: 10000,
    }
  },
  methods: {
    searchKeywordsChangeHandler() {
      this.$emit('filtered-keywords', this.searchKeywords)
    },
    searchMinPriceHandler() {
      this.$emit('filtered-min-price', this.searchMinPrice)
    },
    searchMaxPriceHandler() {
      this.$emit('filtered-max-price', this.searchMaxPrice)
    },
  },
})
</script>

<style lang="scss">
.filters {
  display: flex;
}
</style>
