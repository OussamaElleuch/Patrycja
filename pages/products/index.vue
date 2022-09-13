<template>
  <div class="products">
    <div class="products__filters">
      <Filters
        @filtered-min-price="filteredMinPrice"
        @filtered-max-price="filteredMaxPrice"
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
  getProductsByMinPrice,
  getProductsByMaxPrice,
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
      newFilteredMinPrice: 0,
      newFilteredMaxPrice: 9999999,
    }
  },
  computed: {
    filteredProducts() {
      if (this.searchQuery !== '') {
        return getProductsByKeywords(this.products, this.searchQuery)
      } else if (this.newFilteredMinPrice !== 0) {
        return getProductsByMinPrice(this.products, this.newFilteredMinPrice)
      } else if (this.newFilteredMaxPrice !== 9999999) {
        return getProductsByMaxPrice(this.products, this.newFilteredMaxPrice)
      } else {
        console.log(this.products, 'prd')

        return this.products
      }
    },
  },
  methods: {
    filteredKeywords(keywords) {
      this.searchQuery = keywords
    },
    filteredMinPrice(minPrice) {
      this.newFilteredMinPrice = minPrice
      console.log(minPrice, 'minPrice')
    },
    filteredMaxPrice(maxPrice) {
      this.newFilteredMaxPrice = maxPrice
      console.log(maxPrice, 'maxPrice')
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
