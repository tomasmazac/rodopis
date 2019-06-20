<template>

    <figure>
        <img :src="require('../../images/' + src)" :alt="alt" :class="size">
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
</style>
