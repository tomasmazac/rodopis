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
figure {
  margin-left: -1.5rem;
  margin-right: -1.5rem;
}
figcaption {
    font-style: italic;
    text-align: center;
    font-size: smaller;
    line-height: 1.25;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
}
img {
    display: block;
    margin: 0 auto 0.5rem;
}
.sm {
    max-width: 25% !important;
}
.md {
    max-width: 100% !important;
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

@media (min-width: 420px) {
    figure {
        margin-left: 0;
        margin-right: 0;
    }
    figcaption {
        font-style: italic;
        text-align: center;
        font-size: smaller;
        margin-left: 2rem;
        margin-right: 2rem;
    }
    .md {
        max-width: 50% !important;
    }
}
</style>
