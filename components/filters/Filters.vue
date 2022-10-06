<template>
  <div class="filters">
    <div class="filters__search">
      <div class="search">
        <BaseInput
          v-model="searchKeywords"
          placeholder="search for sth"
          @change="searchKeywordsChangeHandler"
        />
      </div>
    </div>

    <div class="filters__price">
      <div>
        <label>min price input</label>
        <input v-model="searchPrice.min" class="min" @change="searchPriceHandler" />
      </div>
      <div>
        <label>max price input</label>
        <input v-model="searchPrice.max" class="max" @change="searchPriceHandler" />
      </div>
    </div>

    <div class="filters__ratings">
      <label>Rating</label>
      <select v-model="searchRating" class="min" @change="searchRatingHandler">
        <option disabled>Choose rating</option>
        <option v-for="(option, index) in options" :key="index" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BaseInput from "@/components/ui/atoms/BaseInput.vue";
export default Vue.extend({
  name: "Filters",
  components: { BaseInput },
  data() {
    return {
      searchKeywords: null,
      searchPrice: { min: 0, max: 10000 },
      searchRating: 0,
      options: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    searchKeywordsChangeHandler() {
      this.$emit("filtered-keywords", this.searchKeywords);
    },
    searchPriceHandler() {
      this.$emit("filtered-price", this.searchPrice);
    },
    searchRatingHandler() {
      this.$emit("filtered-rating", this.searchRating);
    },
  },
});
</script>

<style lang="scss">
.filters {
  display: flex;
}
</style>
