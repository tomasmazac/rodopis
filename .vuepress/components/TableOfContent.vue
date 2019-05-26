<template>

  <section>

    <div v-for="letter in alphabet" v-if="categories[letter]">

      <h2>{{ letter }}</h2>

      <ul>
        <li v-for="page in categories[letter]">
          <a :href="page.path">{{ page.frontmatter.surname }} {{ page.frontmatter.firstName }}</a>
          ({{ getBirth(page) }}–{{ getDeath(page) }})
        </li>
      </ul>

    </div>

  </section>

</template>

<script>

import Vue from 'vue'

export default {
  data() {
    return {
      alphabet: ['A', 'B', 'C', 'Č', 'D', 'E', 'F', 'G', 'H', 'Ch', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'Š', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ž'],
      categories: {}
    }
  },

  created() {
    this.alphabet.map((letter) => {
      const x = this.pages.filter((page) => {
        if (page.frontmatter.surname) {
          return page.frontmatter.surname[0] === letter
        }
      })
      x.length > 0 && Vue.set(this.categories, letter, x)
    })
  },

  computed: {
      
      pages() {

          return this.$site.pages
      }
  },

  methods: {

    getBirth(page) {
      return page.frontmatter.birth ? page.frontmatter.birth : '?'
    },

    getDeath(page) {
      return page.frontmatter.death ? page.frontmatter.death : '?'
    }
  }
}
</script>

<style scoped>


</style>
