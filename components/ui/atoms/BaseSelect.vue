<template>
  <div>
    <label>{{ label }}</label>
    {{ selectedOption }}
    <select v-bind="$attrs" v-model="selectedOption" @change="getSelectedOption">
      <option v-if="disabledOption" disabled>{{ disabledOption }}</option>
      <option v-for="(option, index) in options" :key="index" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "BaseSelect",
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: Number,
      default: 1,
    },
    options: {
      type: Array,
      default: () => [],
    },
    disabledOption: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      selectedOption: null,
    };
  },
  computed: {
    getListeners() {
      return {
        ...this.$listeners,
        change: () => this.$emit("change", this.selectedOption),
      };
    },
  },
  watch: {
    selectedOption(newValue) {
      this.$emit("input", newValue);
    },
  },
  methods: {
    getSelectedOption() {
      this.$emit("selected-option", this.selectedOption);
    },
  },
});
</script>
