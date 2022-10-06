<template>
  <div class="product">
    <img class="product__image" :src="imageUrl" :alt="name" loading="lazy" />
    <div class="product__infos">
      <div class="product__infos__title">
        <nuxt-link :to="`product/${id}`" class="name">
          <div class="name__link" v-text="name" />
        </nuxt-link>
        <div class="price" v-text="`${price}$`" />
      </div>
      <div class="product__infos__description" v-text="description" />
      <div class="product__infos__rate">
        <rating :rate="rate"></rating>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Rating from "../ui/Rating.vue";
// when clicking on product need to open a pop up  with product details
//  the product price can be changed from input, when validating I need to be redirected to home page with new product price

export default Vue.extend({
  name: "Product",
  components: { Rating },
  props: {
    id: {
      type: String,
      required: true,
    },
    name: String,
    description: String,
    imageUrl: {
      type: String,
      validator(value) {
        try {
          return Boolean(new URL(value));
        } catch (ex) {
          return false;
        }
      },
    },
    price: {
      type: Number,
      validator(value) {
        return !isNaN(value);
      },
    },
    rate: Number,
  },
});
</script>

<style lang="scss" scoped>
.product {
  width: 20rem;
  height: 25rem;
  border-radius: 1rem;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
  }

  &__image {
    width: 100%;
    max-height: 15rem;
    border-radius: 1rem 1rem 0 0;
  }

  &__infos {
    margin: 0 0.5rem;

    &__title {
      display: flex;
      justify-content: space-between;
      margin: 0.5rem 0;
      font-size: 1.5rem;
      font-weight: 600;

      .name {
        color: $primary;

        &__link {
          text-decoration: none;
        }
      }
    }

    &__description {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 0.5rem;
    }

    &__rate {
      display: flex;
      justify-content: space-between;

      .add-to-cart {
        background: $primary;
        color: white;
        border: 0;
        border-radius: 0.5rem;
        height: 30px;
        cursor: pointer;
      }
    }
  }
}
</style>
