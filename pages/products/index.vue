<template>
  <div class="products">
    <div class="products__filters">
      <Filters
        @filtered-price="filteredPrice"
        @filtered-keywords="filteredKeywords"
      />
    </div>
    <div class="products__list">
      <product
        v-for="product in filteredProducts"
        :id="product.id"
        :key="product.id"
        :name="product.name"
        :image-url="product.imageUrl"
        :price="product.price"
        :description="product.description"
        :rate="product.rate"
      />
    </div>
    <div class="products__pagination">No pagination here !</div>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  getAllProducts,
  getProductsByKeywords,
  getProductsByPriceRange,
} from '@/data/index.js'
import Product from '@/components/products/Product.vue'
import Filters from '@/components/filters/Filters.vue'

export default Vue.extend({
  name: 'Products',
  components: { Product, Filters },

  async asyncData() {
    const products = await getAllProducts()
    return { products }
  },
  data() {
    return {
      searchQuery: '',
      priceRange: null,
    }
  },
  computed: {
    filteredProducts() {
      let result = this.products
      if (this.searchQuery !== '') {
        result = getProductsByKeywords(result, this.searchQuery)
      }

      if (this.priceRange) {
        result = getProductsByPriceRange(
          result,
          this.priceRange.min,
          this.priceRange.max
        )
      }
      return result
    },
  },
  methods: {
    filteredKeywords(keywords) {
      this.searchQuery = keywords
    },
    filteredPrice(priceRange) {
      this.priceRange = priceRange
    },
  },
})
</script>

<style lang="scss">
.products {
  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    @include for-mobile {
      justify-content: center;
    }
  }
}
</style>
