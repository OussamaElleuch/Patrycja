<template>
  <div class="products">
    <div class="products__filters">No filters for the moment !</div>
    <div class="products__list">
      <product
        v-for="product in products"
        :id="product.id"
        :key="product.id"
        :name="product.name"
        :image-url="product.imageUrl"
        :price="product.price"
        :description="product.description"
        :rate="product.rate"
      />
    </div>
    <div class="products__pagination"> No pagination here ! </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getAllProducts } from '@/data/index.js'
import Product from '@/components/products/Product.vue'

export default Vue.extend({
  name: 'Products',
  components: { Product },
  async asyncData() {
    const products = await getAllProducts()
    return { products }
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
