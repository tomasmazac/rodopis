<template>
  <span>[{{ number }}]</span>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      number: undefined
    };
  },

  created() {
    Vue.set(this.$page, "sources", []);
  },

  mounted() {
    this.number = this.$page.sources.length + 1;

    this.$page.sources.push({
      number: this.number,
      text: "foo"
    });
  }
};
</script>
