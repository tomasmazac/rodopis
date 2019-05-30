<template>

    <figure>
        <img :src="require('../../images/' + src)" :alt="alt">
        <figcaption>{{ alt }}</figcaption>
    </figure>

</template>

<script>

export default {
    props: ['alt', 'src'],
}
</script>

<style>
figcaption {
    font-style: italic;
    text-align: center;
    font-size: smaller;
}
</style>
