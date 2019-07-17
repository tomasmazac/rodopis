<template>
  <span :style="`opacity: ${opacity}; font-weight: ${fontWeight}`" v-html="`${surname} `"></span>
</template>

<script>
export default {
  props: {
    surname: {
      type: String,
      required: true
    },
    generation: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 0 && value <= 10;
      }
    }
  },
  computed: {
    opacity() {
      return 1.0 - this.generation / 10;
    },
    fontWeight() {
      return 900 - this.generation * 100;
    }
  }
};
</script>