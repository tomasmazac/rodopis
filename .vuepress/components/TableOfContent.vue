<template>
  <section>
    <div v-for="letter in alphabet" v-if="categories[letter]">
      <h2>{{ letter }}</h2>

      <ul>
        <li v-for="page in categories[letter]">
          <a :href="page.path">{{ page.frontmatter.surname }} {{ page.frontmatter.firstName }}</a>
          <span
            v-if="getBirth(page) !== '?' || getDeath(page) !== '?'"
          >({{ getBirth(page) }}–{{ getDeath(page) }})</span>
          <span v-else></span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      alphabet: [
        "A",
        "B",
        "C",
        "Č",
        "D",
        "E",
        "F",
        "G",
        "H",
        "Ch",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "Ř",
        "S",
        "Š",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "Ž"
      ],
      categories: {}
    };
  },

  beforeMount() {
    this.alphabet.map(letter => {
      const x = this.pages.filter(page => {
        if (page.frontmatter.surname) {
          return page.frontmatter.surname[0] === letter;
        }
      });
      x.length > 0 && Vue.set(this.categories, letter, x);
    });
  },

  mounted() {
    this.alphabet.forEach(letter => {
      if (this.categories[letter]) {
        this.categories[letter] = this.getSorted(
          this.categories[letter],
          "surname"
        );
      }
    });
  },

  computed: {
    pages() {
      return this.getSorted(this.$site.pages, "path");
    }
  },

  methods: {
    getSorted(arr, param) {
      return arr.sort((a, b) =>
        a[param] > b[param] ? 1 : b[param] > a[param] ? -1 : 0
      );
    },
    getBirth(page) {
      return page.frontmatter.birth ? page.frontmatter.birth : "?";
    },

    getDeath(page) {
      return page.frontmatter.death ? page.frontmatter.death : "?";
    }
  }
};
</script>