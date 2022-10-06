<template>
  <div>
    <label>{{ label }}</label>
    <input :value="value" v-bind="$attrs" v-on="getListeners" />
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  computed: {
    getListeners() {
      return {
        ...this.$listeners,
        change: ({ target: { value } }) => this.$emit("input", value),
        // input: (event) => this.$emit('input', event.target.value)
      };
    },
  },
});
</script>
