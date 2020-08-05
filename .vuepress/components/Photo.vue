<template>
    <figure>
        <img :src="source" :alt="alt" :class="size" 
        @mouseenter="showColorized = true"
        @mouseleave="showColorized = false">
        <figcaption>{{ alt }}</figcaption>
    </figure>
</template>

<script>

export default {
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        },
        size: {
            type: String,
            default: 'lg'
        },
        colorized: {
            type: [String, Boolean],
            default: false
        }
    },
    data () {
        return {
            showColorized: false
        }
    },
    computed: {
        source () {
            return this.showColorized
            ? require('../../images/' + this.colorized)
            : require('../../images/' + this.src)
        }
    }
}
</script>

<style>
figcaption {
    font-style: italic;
    text-align: center;
    font-size: smaller;
}
img {
    display: block;
    margin: 0 auto;
}
.sm {
    max-width: 25% !important;
}
.md {
    max-width: 50% !important;
}
.lg {
    max-width: 100% !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
