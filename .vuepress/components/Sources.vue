<template>
    
    <ol>
        <li v-for="source in sources">{{ source.text }}</li>
    </ol>

</template>

<script>
export default {
    computed: {
        
        sources() {

            return this.$page.sources
        }
    }
}
</script>

<style scoped>

ol {
  list-style: none;
  counter-reset: my-awesome-counter;
  padding: 0;
}
ol li {
  counter-increment: my-awesome-counter;
}

ol li::before {
  content: "[" counter(my-awesome-counter) "]";

    display: inline-block;
    width: 2em;
    margin-right: 0.5em;

    text-align: right;
}

</style>
